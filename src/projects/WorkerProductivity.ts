import { Project } from '.';

export const WorkerProductivity: Project = { 
	name: 'Worker Productivity Tracker',
	summary: 'A web application to track worker productivity at a custom metal casting facility.',
	tech: ['React', 'TypeScript', 'Material-UI', 'Node.js', 'Express', 'SQLite'],
	pics: [
		{
			imgName: 'ipc',
			caption: '**Admin** - Admin portal to add employees, stations, and parts'
		},
		{
			imgName: 'ipc-employee',
			caption: '**Admin** - Add employee with name and picture'
		},
		{
			imgName: 'ipc-station',
			caption: '**Admin** - Add stations with name and pictures. Some stations have special requirements that can be set here.'
		},
		{
			imgName: 'ipc-part',
			caption: '**Admin** - Add parts with name, company name, and part number. Shown is a placeholder image that will be the default if no image is added. Similar default pictures exist for employees and stations.'
		},
		{
			imgName: 'ipc-filter-part',
			caption: '**Admin** - Parts can be filtered by name, part number, or company name. Checkboxes determine if part is currently in production (will determine what shows up on timer screen). The employee checkboxes determine whether the employee is currently active (if they should be displayed on timer screen).'
		},
		{
			imgName: 'ipc-timer',
			caption: `**Timer** - iPads are located around the facility displaying the timer page. An employee will select themself from a dropdown, then what station they are working at, and what part they're working on. Then they will start the timer.`
		},
		{
			imgName: 'ipc-timer2',
			caption: '**Timer** - Multiple timers can run concurrently. Running timers are saved in localstorage to prevent data loss on page refresh.'
		},
		{
			imgName: 'ipc-timer3',
			caption: '**Timer** - When a worker is finished, they will press stop, then enter how many parts they completed. The submit button will submit the data to the server and remove the timer from the screen.',
			isMain: true
		},
		{
			imgName: 'ipc-sheets',
			caption: 'An endpoint allows for importing the data into Google Sheets using the `IMPORTDATA` function. The data can then analyzed to find trends on worker productivity and data for individual parts to help in future estimating.'
		}
	]
};
