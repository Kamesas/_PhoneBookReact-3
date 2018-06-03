import React, {Component} from 'react'
import '../semantic/semantic.min.css'
import Header from './Header/Header'
import BodyContactList from '../components/Body/BodyContactList'
import boxContact from './Body/boxContacts'


class App extends Component {
	render() {

		return (
				<div className="ui two column centered grid">
				  <div className="column">

				  	<Header />					 

				  	<BodyContactList boxContact={boxContact} />		  		  				  	

				  </div>		  
				</div>
		) 

	}
}

export default App