const InitialState = {
	auth: {},
	questions: [],
	selectedQuestion: null,
	filter: {
		title: '',
		description: '',
	},
	fetching: false,
	error: null,
	validatingProfile: true,
};

export default InitialState;