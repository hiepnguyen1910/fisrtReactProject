const initState = {
	users: [
		{ id: 1, name: 'Harry' },
		{ id: 2, name: 'Felix' },
	],
};

const rootReducer = (state = initState, action) => {
	return state;
};
export default rootReducer;
