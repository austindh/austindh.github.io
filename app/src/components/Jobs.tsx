import React, { useState } from 'react';
import { myJobs, Job } from '../work';
import { format } from 'date-fns';

import './Jobs.scss';
import clsx from 'clsx';
import { TechList } from './TechList';
import { ReactComponent as Caret } from '../icons/caret-down.svg';

export const Jobs = () => {

	const [expandedJob, setExpandedJob] = useState<Job | null>(null);

	const formatStartEnd = (x?: Date) => {
		if (!x) {
			x = new Date();
			return 'present';
		}
		return format(x, 'MMM yyyy');
	}

	const toggleJob = (j: Job) => {
		setExpandedJob(currentExpanded => {
			return currentExpanded === j ? null : j;
		});
	}

	const jobs = myJobs.map((job, i) => (
		<div key={job.companyName} className={clsx('card', 'job', `card-${i}`, {
			expanded: job === expandedJob
		})}>
			<div className="contents">
				<div className="left">
					<div className="top" onClick={() => toggleJob(job)}>
						<div className="company card-title">{job.companyName}</div>
						<div className={clsx('expander', {
							expanded: job === expandedJob
						})}>
							<Caret />
						</div>
					</div>
					<div className="titles">
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
					</div>
					{/* <div className="spacer"></div> */}
				</div>
				<div className={clsx('right', {
						expanded: job === expandedJob
					})}>
					<ul className={clsx('responsibilities', {
						expanded: job === expandedJob
					})}>
						{ job.responsibilities.map((r, i) => 
							(
								<li key={i} className="responsibility">{r}</li>
							))
						}
					</ul>
				</div>
			</div>
			<div className="tech">
				<TechList tech={job.tech} />
			</div>
		</div>
	));

	return (
		<div>
			{jobs}
		</div>
	)
}
