import React from 'react'

export default class Jobs extends React.Component {
	render() {

		let jobs = this.props.jobs.map( ( job, i ) => {

			let tasks = job.tasks.map( ( task, i ) => {
				return (
					<li key={ i } className="task">{ task }</li>
				)
			});

			return (
				<div className="job"key={ i }>
					<div className="jobInfo">
						<div className="title">{ job.title }</div>
						<div className="time">{ job.time }</div>
						<div className="employer">{ job.employer }</div>
						<div className="location">{ job.location }</div>
					</div>
					<ul className="tasks">
						{ tasks }
					</ul>
				</div>
			);
		});

		return (
			<div className="jobs">{ jobs }</div>
		)
	}
}
