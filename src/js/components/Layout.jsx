import React from 'react';
import { connect } from 'react-redux';

import { loadResumeInfo } from '../actions/testAction';

import Header from './Header.jsx';
import Jobs from './Jobs.jsx';

//Defines how component will listen to state (which part of state to be passed to component)
function mapStateToProps( state ) {
	return { state: state.main };
}

class Layout extends React.Component {

	componentWillMount() {
		this.props.dispatch( loadResumeInfo() );
	}

	render() {
		return(
			<div>
				<Header />
				<section>
					<h2>Work Summary</h2>
					<Jobs jobs={ this.props.state.jobs } />
				</section>
			</div>
		)
	}
}

export default connect( mapStateToProps )( Layout )
