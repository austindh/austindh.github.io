import React from 'react';
import { myJobs, Job } from '../work';
import { format } from 'date-fns';

import './Jobs.scss';
import { Page } from './Page';
import clsx from 'clsx';

export const Jobs = () => {
	// myJobs.sort((a, b) => {
	// 	const getEnd = (x: Job) => x.titles.slice(-1)[0].end || new Date();
	// 	return getEnd(a) > getEnd(b) ? -1 : 1;
	// })

	// Show newest jobs and newest titles first
	// myJobs.forEach(j => j.titles.reverse());
	// myJobs.reverse();

	const formatStartEnd = (x?: Date) => {
		if (!x) {
			x = new Date();
			return 'present';
		}
		return format(x, 'MMM yy');
	}

	const jobs = myJobs.map((job, i) => (
		<div key={job.companyName} className={clsx('card', 'job', `card-${i}`)}>
			<div className="company">{job.companyName}</div>
			{job.titles.map((t, i) => (
				<div className="title" key={i}>
					<div className="name">{t.title}</div>
					<div className="start-end">
						<span className="start">{formatStartEnd(t.start)}</span>
						-
						<span className="end">{formatStartEnd(t.end)}</span>
					</div>
				</div>
			))}
			{job.responsibilities.map((r, i) => (
				<div key={i} className="responsibility">{r}</div>
			))}
		</div>
	));

	return (
		<div>
			{jobs}
		</div>
	)
}
