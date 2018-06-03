import React from 'react'
import '../semantic/semantic.min.css'
import Header from './Header/Header'
import BodyContactList from '../components/Body/BodyContactList'
import boxContact from './Body/boxContacts'


function App () {
	return (
			<div className="ui two column centered grid">
			  <div className="column">

			  	<Header />					 

			  	<BodyContactList boxContact={boxContact} />		  		  				  	

			  </div>		  
			</div>
		) 
}

export default App