import React from 'react'
import '../semantic/semantic.min.css'
import Header from './Header/Header'
import Body from './Body/Body'
import boxContact from './Body/boxContacts'

function App () {
	return (
			<div className="ui two column centered grid">
			  <div className="column">

			  	<Header />					 

			  	<Body contact={boxContact[0]} />				  	
			  	<Body contact={boxContact[1]} />				  	

			  </div>		  
			</div>
		) 
}

export default App