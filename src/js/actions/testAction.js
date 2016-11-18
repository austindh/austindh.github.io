import axios from 'axios';

export function test() {
	return {
		type: 'TEST_ACTION',
		payload: 10
	};
}

export function loadResumeInfo() {
	return dispatch => {
		axios.get( '/resumeInfo.json' )
			.then( response => {
				dispatch({ type: 'RESUME_INFO', payload: response.data });
			})
			.catch( err => {
				console.log( 'err: ', err );
			});
	};
}
