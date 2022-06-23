import { parse } from "date-fns";

export interface JobTitle {
	title: string
	start: Date
	end?: Date
}

export interface Job {
	titles: JobTitle[]
	companyName: string
	location: string
	responsibilities: string[]
	tech: string[]
}

const toDate = (dateString: string): Date => {
	return parse(dateString, 'MMM yyyy', new Date());
}

export const myJobs: Job[] = [
	{
		companyName: "BYU Center for Teaching & Learning",
		location: "Provo, UT",
		titles: [
			{
				title: "Web Developer",
				start: toDate("Mar 2014"),
				end: toDate("May 2016")
			}
		],
		responsibilities: [
			"Worked as part of team of front-end developers to improve and maintain Learning Suite, a learning management system (LMS) used daily by approximately 35,000 BYU faculty members and students",
			"Implemented user interface and functionality using HTML, SCSS, JavaScript (jQuery, Backbone.js, Handlebars.js), and PHP",
			"Implemented site-wide audio and video support update, including adding codec detection, in-browser feature detection, and QuickTime integration"
		],
		tech: ['jQuery', 'Backbone.js', 'Handlebars.js', 'PHP']
	},
	{
		companyName: 'MemoryMail',
		location: 'Provo, UT',
		titles: [
			{
				title: 'Full Stack Developer',
				start: toDate('Jan 2016'),
				end: toDate('May 2016')
			}
		],
		responsibilities: [
			'Worked as the sole developer for a startup to create photo books',
			'Implemented web application using the MEAN (MongoDB, Express, AngularJS, and Node.js) stack',
			'Integrated log in and email access with Google and Gmail',
			'Integrated payments using Stripe'
		],
		tech: ['MongoDB', 'Express', 'AngularJS', 'Node.js']
	},
	{
		companyName: 'Clearwater Analytics',
		location: 'Boise, ID',
		titles: [
			{
				title: 'Software Development Intern',
				start: toDate('May 2016'),
				end: toDate('Aug 2016')
			}
		],
		responsibilities: [
			'Worked as part of a team to implement internal web services using Java (Jersey) and Microsoft SQL Server',
			'Wrote unit tests, integration tests, and database stored procedures',
			'Implemented front-end user interfaces using jQuery and AngularJS'
		],
		tech: ['Java (Jersey)', 'Microsoft SQL', 'jQuery', 'AngularJS']
	},
	{
		companyName: 'Xactware',
		location: 'Lehi, UT',
		titles: [
			{
				title: 'Internet Applications Developer',
				start: toDate('Oct 2016'),
				end: toDate('May 2018')
			},
			{
				title: 'Developer I',
				start: toDate('May 2018'),
				end: toDate('Oct 2018')
			},
			{
				title: 'Developer II',
				start: toDate('Oct 2018'),
				end: toDate('May 2020')
			}
		],
		responsibilities: [
			'Worked as part of a team of full stack developers to improve and maintain ContentsTrack, a web application for managing the pack out and pack back process for restoration companies',
			'Implemented new site features using C# (.NET), Oracle SQL, AngularJS, and Bootstrap',
			'Introduced and implemented changes to modernize front-end, including adding Babel to build process and replacing font icon file with SVGs',
			'Implemented live preview and PDF generation for barcodes and QR codes using HTML canvas',
			'Rewrote admin portion of the website to use AngularJS Material instead of Bootstrap',
			'Migrated entire JavaScript codebase to TypeScript (approximately 40,000 LOC)',
			'Worked as part of a team of developers on an Angular application',
			'Worked as part of a team of developers on a React application'
		],
		tech: ['C# (.NET)', 'Oracle SQL', 'AngularJS', 'TypeScript', 'Angular', 'React', 'Babel']
	},
	{
		companyName: 'SemanticBits',
		location: 'remote',
		titles: [
			{
				title: 'Software Engineer',
				start: toDate('May 2020'),
				end: toDate('May 2022')
			},
			{
				title: 'Senior Software Engineer',
				start: toDate('May 2022')
			}
		],
		responsibilities: [

		],
		tech: [ 'TypeScript', 'React', 'Node.js']
	}
];

// Show in reverse order
myJobs.reverse();
myJobs.forEach(j => j.titles.reverse());
