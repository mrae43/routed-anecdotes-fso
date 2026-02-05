import { useReducer, createContext } from 'react';
import {
	notificationReducer,
	initialState,
} from './reducer/notificationReducer';

const NotificationContext = createContext();

export const NotificationContextProvider = ({ children }) => {
	const [notification, dispatch] = useReducer(
		notificationReducer,
		initialState,
	);

	const setVoteNotification = (content, seconds) => {
		dispatch({ type: 'VOTE_NOTIFICATION', payload: content });
		setTimeout(() => {
			dispatch({ type: 'CLEAR_NOTIFICATION' });
		}, seconds * 1000);
	};

	const setCreationNotification = (content, seconds) => {
		dispatch({ type: 'CREATE_NOTIFICATION', payload: content });
		setTimeout(() => {
			dispatch({ type: 'CLEAR_NOTIFICATION' });
		}, seconds * 1000);
	};

	const setErrorNotification = (seconds) => {
		dispatch({ type: 'ERROR_NOTIFICATION' });
		setTimeout(() => {
			dispatch({ type: 'CLEAR_NOTIFICATION' });
		}, seconds * 1000);
	};

	return (
		<NotificationContext.Provider
			value={{
				notification,
				setVoteNotification,
				setCreationNotification,
				setErrorNotification,
			}}>
			{children}
		</NotificationContext.Provider>
	);
};

export default NotificationContext;
