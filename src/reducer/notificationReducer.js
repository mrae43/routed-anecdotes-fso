export const initialState = '';

export const notificationReducer = (state, action) => {
	switch (action.type) {
		case 'VOTE_NOTIFICATION':
			return `An anecdote '${action.payload}' have been voted`;
		case 'CREATE_NOTIFICATION':
			return `A new anecdote '${action.payload}' created!`;
		case 'ERROR_NOTIFICATION':
			return `anecdote too short, must have length 5 or more`;
		case 'CLEAR_NOTIFICATION':
			return initialState;
		default:
			throw new Error(`Unknown action type: ${action.type}`);
	}
};
