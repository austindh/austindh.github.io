(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{153:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(52),o=n.n(i),s=(n(62),n(63),n(4)),c=n(5),l=n(25),m=(n(64),n(21)),u=(n(65),n(6)),d=function(){var e=[{name:"Home",route:"/"},{name:"Work Experience",shortName:"Work",route:"/work"},{name:"Projects",route:"/projects"}],t=Object(c.d)().pathname,n=e.find((function(e){return e.route===t}))||e[0];Object(a.useEffect)((function(){p(n.name)}),[n.name]);var i=Object(a.useState)(n.name),o=Object(s.a)(i,2),d=o[0],p=o[1],h=Object(a.useState)({opacity:0,width:0,left:0}),f=Object(s.a)(h,2),g=f[0],b=f[1],v=Object(a.useState)(document.body.clientWidth),y=Object(s.a)(v,2),w=y[0],E=y[1],O=Object(a.useCallback)((function(){var e=document.getElementById("highlighter"),t=document.getElementById(d);if(t&&e){var n=t.offsetLeft,a=t.clientWidth,r=25;w<=800&&(r=15),w<=500&&(r=0);var i=a-r;b((function(e){return Object(m.a)(Object(m.a)({},e),{},{left:n+a/2-i/2,width:i})}))}}),[d,w]);return Object(a.useEffect)((function(){O()}),[O,d]),Object(a.useEffect)((function(){setTimeout((function(){b((function(e){return Object(m.a)(Object(m.a)({},e),{},{opacity:1})}))}),500)}),[]),Object(a.useEffect)((function(){var e,t=function(){E(document.body.clientWidth),clearTimeout(e),e=setTimeout(O,500)};return window.addEventListener("resize",t),function(){return document.removeEventListener("resize",t)}}),[O,d]),r.a.createElement("div",{id:"top-nav",className:"shadow"},r.a.createElement("div",{className:"title"},"Austin Hughes"),r.a.createElement("div",{className:"pages"},e.map((function(e,t){return r.a.createElement("div",{key:t,id:e.name,className:Object(u.a)({active:e.name===d})},r.a.createElement(l.b,{to:e.route,onClick:function(){return p(e.name)}},w<=500&&e.shortName?e.shortName:e.name))})),r.a.createElement("div",{id:"highlighter",style:g})))},p=n(158),h=function(e){return Object(p.a)(e,"MMM yyyy",new Date)},f=[{companyName:"BYU Center for Teaching & Learning",location:"Provo, UT",titles:[{title:"Web Developer",start:h("Mar 2014"),end:h("May 2016")}],responsibilities:["Worked as part of team of front-end developers to improve and maintain Learning Suite, a learning management system (LMS) used daily by approximately 35,000 BYU faculty members and students","Implemented user interface and functionality using HTML, SCSS, JavaScript (jQuery, Backbone.js, Handlebars.js), and PHP","Implemented site-wide audio and video support update, including adding codec detection, in-browser feature detection, and QuickTime integration"],tech:["jQuery","Backbone.js","Handlebars.js","PHP"]},{companyName:"MemoryMail",location:"Provo, UT",titles:[{title:"Full Stack Developer",start:h("Jan 2016"),end:h("May 2016")}],responsibilities:["Worked as the sole developer for a startup to create photo books","Implemented web application using the MEAN (MongoDB, Express, AngularJS, and Node.js) stack","Integrated log in and email access with Google and Gmail","Integrated payments using Stripe"],tech:["MongoDB","Express","AngularJS","Node.js"]},{companyName:"Clearwater Analytics",location:"Boise, ID",titles:[{title:"Software Development Intern",start:h("May 2016"),end:h("Aug 2016")}],responsibilities:["Worked as part of a team to implement internal web services using Java (Jersey) and Microsoft SQL Server","Wrote unit tests, integration tests, and database stored procedures","Implemented front-end user interfaces using jQuery and AngularJS"],tech:["Java (Jersey)","Microsoft SQL","jQuery","AngularJS"]},{companyName:"Xactware",location:"Lehi, UT",titles:[{title:"Internet Applications Developer",start:h("Oct 2016"),end:h("May 2018")},{title:"Developer I",start:h("May 2018"),end:h("Oct 2018")},{title:"Developer II",start:h("Oct 2018")}],responsibilities:["Worked as part of a team of full stack developers to improve and maintain ContentsTrack, a web application for managing the pack out and pack back process for restoration companies","Implemented new site features using C# (.NET), Oracle SQL, AngularJS, and Bootstrap","Introduced and implemented changes to modernize front-end, including adding Babel to build process and replacing font icon file with SVGs","Implemented live preview and PDF generation for barcodes and QR codes using HTML canvas","Rewrote admin portion of the website to use AngularJS Material instead of Bootstrap","Migrated entire JavaScript codebase to TypeScript (approximately 40,000 LOC)","Worked as part of a team of developers on an Angular application","Worked as part of a team of developers on a React application"],tech:["C# (.NET)","Oracle SQL","AngularJS","TypeScript","Angular","React","Babel"]}];f.reverse(),f.forEach((function(e){return e.titles.reverse()}));var g=n(159),b=(n(71),n(72),function(e){var t=["general","front-end","back-end","database"],n=["angular","react","bootstrap","jquery","handlebars","backbone","material","rxjs","redux"],a=["c#","node","express","php","jersey","aws","nginx","django"],i=["mongo","oracle","sql","postgres"],o=function(e,t){return t.some((function(t){return e.toLowerCase().includes(t)}))};if(e.techTypeOverrides){var s=e.techTypeOverrides;s["front-end"]&&s["front-end"].forEach((function(e){return n.push(e)})),s["back-end"]&&s["back-end"].forEach((function(e){return a.push(e)})),s.database&&s.database.forEach((function(e){return i.push(e)}))}var c=function(e){var t="general";return o(e,n)?t="front-end":o(e,a)?t="back-end":o(e,i)&&(t="database"),{name:e,type:t}},l=[];e.tech&&(l=e.tech.map(c)),e.noSort||l.sort((function(e,n){return t.indexOf(e.type)-t.indexOf(n.type)}));var m,d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return r.a.createElement("div",{className:"tech-list",key:t},e.map((function(e,t){return r.a.createElement("div",{className:Object(u.a)("tech",e.type),key:t},e.name)})))};e.groupedTech&&(m=e.groupedTech.map((function(e){return"string"===typeof e?[e]:e})).map((function(e){return e.map(c)})).map((function(e,t){return d(e,t)})));return e.tech?d(l):m?r.a.createElement("div",{className:"tech-lists"},m):r.a.createElement(r.a.Fragment,null)}),v=n(55);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var E=r.a.createElement("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),O=r.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),j=function(e){var t=e.svgRef,n=e.title,a=w(e,["svgRef","title"]);return r.a.createElement("svg",y({height:24,viewBox:"0 0 24 24",width:24,ref:t},a),n?r.a.createElement("title",null,n):null,E,O)},k=r.a.forwardRef((function(e,t){return r.a.createElement(j,y({svgRef:t},e))})),N=(n.p,n(73),function(e){var t=e.classes||[],n=Object(a.useRef)(null),i=Object(a.useRef)(null),o=Object(a.useState)(0),c=Object(s.a)(o,2),l=c[0],m=c[1];Object(a.useEffect)((function(){n.current&&m(n.current.clientHeight+20)}));return r.a.createElement("div",{ref:i,className:u.a.apply(void 0,["card","expansion-card",{expanded:e.isExpanded}].concat(Object(v.a)(t)))},r.a.createElement("div",{className:"contents"},r.a.createElement("div",{className:"top"},r.a.createElement("div",{className:Object(u.a)("top-bar",{"has-content":!!e.expandContent}),onClick:function(){if(e.expandContent&&e.expansionChange){var t=!e.isExpanded;e.expansionChange(!e.isExpanded),setTimeout((function(){if(t&&i.current){var e=i.current.offsetTop,n=document.getElementById("main");n.classList.add("smooth"),n.scrollTop=e-30}}),500)}}},r.a.createElement("div",{className:"card-title"},e.title),r.a.createElement("div",{className:Object(u.a)("expander",{expanded:e.isExpanded})},r.a.createElement(k,null)))),e.topContent),!!e.expandContent&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Object(u.a)("details",{expanded:e.isExpanded}),style:{maxHeight:e.isExpanded?l:0}},e.expandContent),r.a.createElement("div",{ref:n,className:"details expanded hidden"},e.expandContent)),e.bottomContent)}),S=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],i=t[1],o=function(e){return e?Object(g.a)(e,"MMM yyyy"):(e=new Date,"present")},c=f.map((function(e,t){return r.a.createElement(N,{key:t,classes:["job","card-".concat(t)],isExpanded:e===n,expansionChange:function(){return t=e,void i((function(e){return e===t?null:t}));var t},title:e.companyName,topContent:r.a.createElement("div",{className:"titles"},e.titles.map((function(e,t){return r.a.createElement("div",{className:"title",key:t},r.a.createElement("div",{className:"name"},e.title),r.a.createElement("div",{className:"start-end"},r.a.createElement("span",{className:"start"},o(e.start)),"-",r.a.createElement("span",{className:"end"},o(e.end))))}))),expandContent:r.a.createElement("ul",null,e.responsibilities.map((function(e,t){return r.a.createElement("li",{key:t,className:"responsibility"},e)}))),bottomContent:r.a.createElement("div",{className:"tech"},r.a.createElement(b,{tech:e.tech}))})}));return r.a.createElement("div",null,c)},x={name:"Home Automation",summary:"My home automation project. What started as a simple Node.js server on a Raspberry Pi has expanded to an external facing server hosted on AWS and a local server running on an Intel NUC.",tech:["React","TypeScript","Node.js","Express","RxJS","Python","AWS","Nginx","MongoDB","Postgres","SQLite","Socket.IO"],description:'\n## Overview\nThis project got started in the summer of 2015, and has been running ever since.\nIt is constantly growing and evolving to include new functionality and it\'s the main\nplace I test out new web technologies.\n\nBelow is a brief overview of all the features:\n\n---\n\n## Cloud server (Amazon EC2 instance)\n\n### Tech Stack:\nTypescript, React, RxJS, Express, Postgres, MongoDB, Nginx\n\n\n### Features/Integrations:\n**Twilio** - Used for sending and receiving text messages.\n\n**Trello** - Automatically create cards each month with tasks we need to do. Cards with due\ndates trigger daily reminder texts until the card has been completed.\n\n**Weather (Dark Sky)** - Gets weather information used by our home server.\n\n**GroupMe** - Used to send updates and receive text commands.\n\n**Budgeting website** - Built with React and Typescript, it\'s a simple website to track our income each month.\n\n**Group texting proxy** - Second Twilio number set up to send out individual messages to members of a church\nchoir. When I text the Twilio number, then message is sent to each individual member. Members can add or\nremove themselves from the text list by texting certain commands to the main number. Members\' texts to the\nnumber are forwarded to my phone, and I can respond to individually reply. \n\n**Owntracks** - Private MQTT server to work with Owntracks app. Geolocation data from Owntracks is used\nto trigger various actions.\n\n**Text commands** - Various commands are available to trigger different events. These can either by invoked\nby texting our Twilio number or sending a message to our GroupMe chat.\n\n**Reminders** - Set by text/GroupMe message. Can be set for a certain time (e.g. "9:30pm"), at an offset (e.g.\n"2h") or to trigger the next time we arrive home. There are also recurring reminders, including weekly to take\nout the trash (and if it\'s a recycling week) and Trello card due date reminders.\n\n**REST API** - Used for budget website as well as home server.\n\n**Socket&#46;io server** - Accepts socket connection from our home server. Sends commands back to home server and has logic to queue messages for later if no socket connected.\n\n---\n\n## Home server (Intel NUC)\n\n### Tech Stack:\nTypescript, Python, React, RxJS, Express, SQLite\n\n### Features/Integrations:\n**Philips Hue** - Schedule for all lights default brightness and color (more blue-white in the morning\nand more orange at night). Custom interface for creating individual commands as well as sequences (chained\ncommands with built in delays that can be cancelled). Custom light groupings. Default brightness/color\noverrides that can be set on a group or individual basis and affect all commands using affected lights.\nIntegration with Hue dimmer switch and motion sensor. Rate limiting commands sent to bridge and retry with\nexponential backoff.\n\n**Amazon Dash buttons** - Detect button presses via network activity (python script using `scapy`) to trigger\nevents.\n\n**GroupMe** - Some logging and error messages sent to our GroupMe chat.\n\n**Light control website** - Built with React and Typescript, provides a mobile friendly web app to control the lights\nand trigger various functions.\n\n**Home status/presence detection** - RxJS BehaviorSubject with timer constantly counting down. Several "at home" \nevent sources that reset timer to max amount (15 minutes). When timer reaches zero, marks status as "not home", turns\noff all lights, and sends a message. Next "at home" event received will set status to "at home" and turn the lights \nback on. "At home" event sources include Owntracks, wifi network activity (python `scapy` script and `node-arp`\nlibrary), Wemo switch presses, and Hue motion sensor/dimmer switch activity.\n\n**Wemo** - Automated on/off and scheduling. Integration with hue light commands to treat Wemo switch as a Hue light\nand integrate with all Hue commands/sequences.\n'.trim(),pics:[{imgName:"automation",caption:"Basic architecture overview"},{imgName:"automation-home",caption:"Home screen for local mobile friendly web app."},{imgName:"automation-nursery",caption:"Buttons to trigger various light functions for each room"}]},T={name:"Fabric Inventory",summary:"A web application to track my wife's inventory of fabric for her Etsy shop.",description:"\n## The Problem\nMy wife runs an Etsy shop selling custom baby clothes. At any given time, she can have around 70 different fabric options\nthat customers can choose from. When customers would message her asking about fabric options, she would have to\ngrab all the fabric fitting their request (e.g. floral or blue), lay them out on the floor, then take a picture\nand label each one with a letter. She would then send that picture to the customer so they could pick which fabric they wanted.\nMany items in her shop are available with two fabrics, so often she would have to take a second picture with options\nplaced next to each other so the customer could visualize how it would look.\n\nThis whole process was tedious, took a lot of space, and it wasn't easy to send out multiple options.\n\n## The Solution\nI built a simple web application to run on our home server to make tracking her fabric easier. It allows her to add each fabric with a picture, tags, and if it is currently in stock. Each fabric is given\na unique id (starting at 1 and counting up). It allows for easy picture generation. You can filter fabrics by tag and in stock status,\nthen generate a picture with each fabric labeled. This makes sending\nfabric options to customers a lot easier, and allows her to generate\nlots of different pictures with very little effort.\n".trim(),tech:["React","TypeScript","Material-UI","Node.js","Express","SQLite"],pics:[{imgName:"fi",caption:"Fabric overview"},{imgName:"fi-edit",caption:"Update fabric in stock status, and add tags and notes"},{imgName:"fi-filter",caption:"Filter fabric by quantity, tags, or id"},{imgName:"fi-pic",caption:"Generate picture to send to customers to show what fabric options are available"},{imgName:"fi-old",caption:"The old way of sending fabric pictures to customers - fabric arranged on the floor with letters manually added for easier reference",isMain:!0},{imgName:"fi-new",caption:"The new way - fabric virtually arranged, no floor needed"}]},M=[x,{name:"Worker Productivity Tracker",summary:"A web application to track worker productivity at a custom metal casting facility.",description:'\n## The Problem\nA metal casting facility had data for much of their process using automated machinery,\nbut didn\'t have good insight as to how effective different workers were and how long\nvarious parts took at each stage of production. They needed a way for\neach worker to input the time spent for each part and each station\nin the warehouse, and it needed to be easy to use.\n\n## The Solution\nI created a web application to help with gathering and analyzing data.\n\n**Admin** - An admin portion of the website is used to enter in all of\nthe employees, stations, and parts to be used. Pictures can be added\nfor each, and data describing the stations and parts is also added.\n\n**Timers** - This is the main part of the site. iPads are placed around\nthe warehouse near various stations, with a very simple interface to\nlog work. Employees "sign in" by selecting their name/picture from a\ndropdown menu. Then they select which station they are at. Then they\nselect the part and any special options for the part/station. They\npress a "play" button to start a timer, then they start their work.\nWhen their batch is finished, they press "stop". They then enter in how\nmany units they completed, then press "submit", which sends the data to\nthe server and deletes the timer. Multiple timers can be added on each\niPad, allowing multiple workers to use each one.\n\n**Server** - The server is written in Node.js and Express, and all data\nis stored in a SQLite database. An endpoint is exposed allowing the\ntimer data to be imported into a Google Sheet, using the `IMPORTDATA`\nfunction, where it can then be analyzed however the company wants.\n'.trim(),tech:["React","TypeScript","Material-UI","Node.js","Express","SQLite"],pics:[{imgName:"ipc",caption:"**Admin** - Admin portal to add employees, stations, and parts"},{imgName:"ipc-employee",caption:"**Admin** - Add employee with name and picture"},{imgName:"ipc-station",caption:"**Admin** - Add stations with name and pictures. Some stations have special requirements that can be set here.",isMain:!0},{imgName:"ipc-part",caption:"**Admin** - Add parts with name, company name, and part number. Shown is a placeholder image that will be the default if no image is added. Similar default pictures exist for employees and stations."},{imgName:"ipc-filter-part",caption:"**Admin** - Parts can be filtered by name, part number, or company name. Checkboxes determine if part is currently in production (will determine what shows up on timer screen). The employee checkboxes determine whether the employee is currently active (if they should be displayed on timer screen)."},{imgName:"ipc-timer",caption:"**Timer** - iPads are located around the facility displaying the timer page. An employee will select themself from a dropdown, then what station they are working at, and what part they're working on. Then they will start the timer."},{imgName:"ipc-timer2",caption:"**Timer** - Multiple timers can run concurrently. Running timers are saved in localstorage to prevent data loss on page refresh."},{imgName:"ipc-timer3",caption:"**Timer** - When a worker is finished, they will press stop, then enter how many parts they completed. The submit button will submit the data to the server and remove the timer from the screen."},{imgName:"ipc-sheets",caption:"An endpoint allows for importing the data into Google Sheets using the `IMPORTDATA` function. The data can then analyzed to find trends on worker productivity and data for individual parts to help in future estimating."}]},T,{name:"austinhughes.me",summary:"This website",tech:["React","TypeScript"]}],I=n(29),A=n.n(I);n(153);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var P=r.a.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),L=r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),B=function(e){var t=e.svgRef,n=e.title,a=R(e,["svgRef","title"]);return r.a.createElement("svg",C({height:24,viewBox:"0 0 24 24",width:24,ref:t},a),n?r.a.createElement("title",null,n):null,P,L)},W=r.a.forwardRef((function(e,t){return r.a.createElement(B,C({svgRef:t},e))}));n.p;function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var D=r.a.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),z=r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),Q=function(e){var t=e.svgRef,n=e.title,a=J(e,["svgRef","title"]);return r.a.createElement("svg",H({height:24,viewBox:"0 0 24 24",width:24,ref:t},a),n?r.a.createElement("title",null,n):null,D,z)},U=r.a.forwardRef((function(e,t){return r.a.createElement(Q,H({svgRef:t},e))}));n.p;function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var q=r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),V=r.a.createElement("path",{d:"M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"}),Y=function(e){var t=e.svgRef,n=e.title,a=F(e,["svgRef","title"]);return r.a.createElement("svg",G({height:24,viewBox:"0 0 24 24",width:24,ref:t},a),n?r.a.createElement("title",null,n):null,q,V)},_=r.a.forwardRef((function(e,t){return r.a.createElement(Y,G({svgRef:t},e))})),X=(n.p,function(e){return"img/".concat(e,".thumb.png")}),$=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),i=n[0],o=n[1],c=Object(a.useState)(0),l=Object(s.a)(c,2),m=l[0],d=l[1],p=Object(a.useState)(!1),h=Object(s.a)(p,2),f=h[0],g=h[1],b=Object(a.useRef)((function(e){"ArrowRight"===e.code?y():"ArrowLeft"===e.code?w():"Escape"!==e.code&&"Enter"!==e.code||v()})),v=function(){o(!1),document.removeEventListener("keydown",b.current),setTimeout((function(){g(!1)}),300)},y=function(){d((function(t){return++t===e.pics.length&&(t=0),t}))},w=function(){d((function(t){return--t<0&&(t=e.pics.length-1),t}))},E=e.pics.filter((function(e){return e.isMain}))[0];E||(E=e.pics[0]);var O,j=e.pics[m],k=e.pics.length>1;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"photo-gallery"},r.a.createElement("div",{className:"thumb",onClick:function(){d(0),o(!0),document.addEventListener("keydown",b.current),g(!0)}},r.a.createElement("div",{className:"img",style:{backgroundImage:"url(".concat(X(E.imgName),")")}}),r.a.createElement("div",{className:"icon"},r.a.createElement(_,null)))),r.a.createElement("div",{className:Object(u.a)("photo-viewer-backdrop",{visible:i,"full-height":f}),onClick:v},r.a.createElement("div",{className:"shadow current-photo",onClick:function(e){e.stopPropagation()}},r.a.createElement("div",{className:Object(u.a)("nav",{"show-nav":k}),onClick:w},r.a.createElement(W,null)),r.a.createElement("div",{className:"mid"},r.a.createElement("div",{className:"img-container"},r.a.createElement("div",{className:"img",style:{backgroundImage:"url(".concat((O=j.imgName,"img/".concat(O,".png")),")")}})),r.a.createElement("div",{className:"caption"},r.a.createElement(A.a,{source:j.caption}))),r.a.createElement("div",{className:Object(u.a)("nav",{"show-nav":k}),onClick:y},r.a.createElement("div",{className:"count"},m+1," of ",e.pics.length),r.a.createElement(U,null)))))},K=(n(154),function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],i=t[1],o=function(e){return e.description&&r.a.createElement("div",{className:"description"},r.a.createElement(A.a,{source:e.description}))};return r.a.createElement("div",{id:"projects"},M.map((function(e,t){return r.a.createElement(N,{key:t,classes:["card","card-".concat(t)],isExpanded:n===e,expansionChange:function(){return function(e){i((function(t){return t===e?null:e}))}(e)},title:e.name,topContent:r.a.createElement("div",{className:Object(u.a)("summary",{pics:!!e.pics})},e.pics&&r.a.createElement("div",{className:"photo-thumb"},r.a.createElement($,{pics:e.pics})),r.a.createElement("div",{className:"summary-text"},e.summary)),expandContent:o(e),bottomContent:r.a.createElement("div",{className:"tech"},r.a.createElement(b,{tech:e.tech}))})})))}),Z=(n(155),function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),i=n[0],o=n[1],c=Object(a.useState)(!1),l=Object(s.a)(c,2),m=l[0],d=l[1];return Object(a.useEffect)((function(){e.fadeOut&&d(!0)}),[e.fadeOut]),Object(a.useEffect)((function(){m&&setTimeout((function(){d(!1),e.onFadeOut&&e.onFadeOut()}),1500)}),[m]),Object(a.useEffect)((function(){e.fadeIn&&setTimeout((function(){o(!0)}),150)}),[e.fadeIn]),r.a.createElement("div",{className:Object(u.a)(e.className,"page",{"fade-out":e.fadeOut,fade:m,"fade-in":e.fadeIn,show:i}),style:{width:e.fadeOut?e.width:""}},e.children)}),ee=n(54),te=(n(156),function(){Object(a.useEffect)((function(){Object(ee.a)({className:"pic",blur:"10px",brightness:1,saturation:1,x:0,y:0})}),[]);var e=r.a.createElement(N,{classes:["about","card-1","intro"],topContent:r.a.createElement("div",{className:"text"},r.a.createElement("span",null,"Hi, I'm Austin!"),r.a.createElement("br",null),r.a.createElement("span",null,"I am a full stack web developer seeking a full-time remote position. I am passionate about web development, learning new technologies, and home automation."))}),t=r.a.createElement(N,{title:"Technology",classes:["about","card-2","tech-card"],topContent:r.a.createElement(b,{groupedTech:[["React","TypeScript","Angular","AngularJS","Redux","RxJS"],["webpack","npm","Jasmine","Mocha","Chai","SinonJS"],["Node.js","Express","C# (.NET)","Django"],["SQL","Postgres","SQLite","MongoDB"],["Python","Java"]],techTypeOverrides:{"front-end":["typescript"]}})}),n=r.a.createElement(N,{title:"Education",classes:["about","card-3"],topContent:r.a.createElement("div",{className:"education"},r.a.createElement("img",{className:"byu",src:X("byu"),alt:""}),r.a.createElement("div",{className:"text"},r.a.createElement("span",null,"B.S. in Computer Science"),r.a.createElement("span",null,"Brigham Young University, Provo, UT"),r.a.createElement("span",null,"2016")))});return r.a.createElement("div",{id:"about-me"},r.a.createElement("div",{className:"contact card"},r.a.createElement("img",{src:"/austin.jpg",alt:"",className:"pic profile"}),r.a.createElement("div",{className:"info"},r.a.createElement("a",{href:"mailto:austindavidhughes@gmail.com"},r.a.createElement("img",{className:"icon",src:"/email.svg",alt:""}),r.a.createElement("span",null,"austindavidhughes@gmail.com")),r.a.createElement("a",{href:"https://github.com/austindh",rel:"noreferrer noopener",target:"_blank"},r.a.createElement("img",{className:"icon",src:"/github.png",alt:""}),r.a.createElement("span",null,"austindh")),r.a.createElement("a",{href:"https://www.linkedin.com/in/austindh816",rel:"noreferrer noopener",target:"_blank"},r.a.createElement("img",{className:"icon",src:"/linkedin.svg",alt:""}),r.a.createElement("span",null,"austindh816")),r.a.createElement("a",{href:"/austin-hughes.pdf",rel:"noreferrer noopener",target:"_blank"},r.a.createElement("img",{className:"icon",src:"/doc.svg"}),r.a.createElement("span",null,"resume.pdf")))),r.a.createElement("div",{className:"paragraph"},e,t,n))});function ne(){var e=Object(c.d)(),t=Object(a.useState)(),n=Object(s.a)(t,2),i=n[0],o=n[1],l=Object(a.useState)(null),m=Object(s.a)(l,2),d=m[0],p=m[1],h=Object(a.useRef)(!0),f=function(){var t=r.a.createElement("div",{className:"card"},"empty");switch(e.pathname){case"/work":t=r.a.createElement(S,null);break;case"/projects":t=r.a.createElement(K,null);break;case"/":t=r.a.createElement(te,null)}return t},g=Object(a.useState)(0),b=Object(s.a)(g,2),v=b[0],y=b[1],w=Object(a.useState)(!1),E=Object(s.a)(w,2),O=E[0];E[1];Object(a.useEffect)((function(){if(h.current)return h.current=!1,void o({className:"first",component:f()});var e,t=document.querySelector(".current");t&&y(t.clientWidth),e=f(),p((function(t){return t?(t.push(e),t):[e]}));var n=document.querySelector("#main");n&&(n.classList.remove("smooth"),n.scrollTop=0)}),[e.pathname,O]);var j=Object(a.useState)(""),k=Object(s.a)(j,2),N=k[0],x=k[1];return Object(a.useEffect)((function(){setTimeout((function(){x("show")}),200)}),[]),r.a.createElement("div",{id:"main",className:N},i&&r.a.createElement(Z,{className:Object(u.a)("current",i.className),fadeOut:!!d,width:v,onFadeOut:function(){d&&(o({component:d.slice(-1)[0]}),p(null))}},i.component),d&&r.a.createElement(Z,{className:"next",fadeIn:!0},d[0]))}var ae=function(){return r.a.createElement(l.a,null,r.a.createElement(d,null),r.a.createElement(ne,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},57:function(e,t,n){e.exports=n(157)},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){}},[[57,1,2]]]);
//# sourceMappingURL=main.f00b529b.chunk.js.map