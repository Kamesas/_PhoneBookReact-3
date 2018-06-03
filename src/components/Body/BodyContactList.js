import React, {Component} from 'react'
import Body from './Body'
import './body.css'

export default class BodyContactList extends Component {
	render(){

		const contactElements = this.props.boxContact.map ((contact, index) => 
						<li key = {contact.id} index={index} >
							<Body contact={contact} /><hr/>
						</li>
					)

		return (

			<ul className="UlBodyContactList">

				{contactElements}		
				
			</ul>

		)

	}	
}



