import React from 'react'
import './app.scss'
//
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'


const App = () => {

	return (

		<div className='app' >
			<Sidebar />

			<Main />
		</div>
	)
}

export default App
