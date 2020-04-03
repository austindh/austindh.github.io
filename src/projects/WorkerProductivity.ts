import { Project } from '.';

export const WorkerProductivity: Project = { 
	name: 'Worker Productivity Tracker',
	summary: 'A web application to track worker productivity at a custom metal casting facility.',
	tech: ['React', 'TypeScript', 'Material-UI', 'Node.js', 'Express', 'SQLite'],
	pics: [
		{
			url: 'ipc.png',
			caption: 'Admin portal to add employees, stations, and parts'
		},
		{
			url: 'ipc-employee.png',
			caption: 'Add employee with name and picture'
		},
		{
			url: 'ipc-station.png',
			caption: 'Add stations with name and pictures. Some stations have special requirements that can be set here.'
		},
		{
			url: 'ipc-part.png',
			caption: 'Add parts with name, company name, and part number. Shown is a placeholder image that will be the default if no image is added. Similar default pictures exist for employees and stations.'
		},
		{
			url: 'ipc-filter-part.png',
			caption: 'Parts can be filtered by name, part number, or company name. Checkboxes determine if part is currently in production (will determine what shows up on timer screen). The employeed checkboxes determine whether the employee is currently active (if they should be displayed on timer screen).'
		},
		{
			url: 'ipc-timer.png',
			caption: `iPads are located around the facility displaying the timer page. An employeed will select themself from a dropdown, then what station they are working at, and what part they're working on. Then they will start the timer.`
		},
		{
			url: 'ipc-timer2.png',
			caption: 'Multiple timers can run concurrently. Running timers are saved in localstorage to prevent data loss on page refresh.'
		},
		{
			url: 'ipc-timer3.png',
			caption: 'When a worker is finished, they will press stop, then enter how many parts they completed. The submit button will submit the data to the server and remove the timer from the screen.',
			isMain: true
		},
		{
			url: 'ipc-sheets.png',
			caption: 'An endpoint allows for importing the data into Google Sheets using the IMPORTDATA function. The data can then analyzed to find trends on worker productivity and data for individual parts to help in future estimating.'
		}
	]
};
