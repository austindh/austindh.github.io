import React, { useState } from 'react';
import { myJobs, Job } from '../work';
import { format } from 'date-fns';

import './Jobs.scss';
import { TechList } from './TechList';

import { ExpansionCard } from './ExpansionCard';

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
		<ExpansionCard
			key={i}
			classes={['job', `card-${i}`]}
			isExpanded={job === expandedJob}
			expansionChange={() => toggleJob(job)}
			title={job.companyName}
			topContent={
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
			}
			expandContent={
				<ul>
					{ job.responsibilities.map((r, i) => 
						(
							<li key={i} className="responsibility">{r}</li>
						))
					}
				</ul>
			}
			bottomContent={
				<div className="tech">
					<TechList tech={job.tech} />
				</div>
			}
		/>
	));

	return (
		<div>
			{jobs}
		</div>
	)
}
