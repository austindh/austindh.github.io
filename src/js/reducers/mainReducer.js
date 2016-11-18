let defaultState = {
	jobs: [],
	skills: {}
};

export default function reducer( state = defaultState, action ) {

	switch( action.type ) {
		case 'RESUME_INFO':
			let { jobs, skills } = action.payload;
			return {
				...state,
				jobs: jobs,
				skills: skills
			}

	}

	return state;
}
