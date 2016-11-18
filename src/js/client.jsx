import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Layout from './components/Layout.jsx'
import store from './store'
import '../scss/main.scss'

ReactDOM.render(
	<Provider store={ store }>
		<Layout />
	</Provider>,
	document.getElementById( 'content' )
);
