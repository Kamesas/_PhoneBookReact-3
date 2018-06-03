import React, {Component} from 'react'
import Body from './Body'
import './body.css'

export default class BodyContactList extends Component {

	deleteBlock = (i) => {
    var arr = this.state.contactElements;
    arr.splice (i, 1);
    this.setState ({contactElements: arr});
  };
  updateText = (text, i) => {
    var arr = this.state.contactElements;
    arr[i] = text;
    this.setState ({contactElements: arr});
  };

	render(){

		const contactElements = this.props.boxContact.map ((contact, index) => 
						//<li key = {contact.id} index={index} >
						<li key = {index} >
							<Body contact={contact} update={this.updateText} del={this.deleteBlock} /><hr/>
						</li>
					)

		return (			

			<ul className="UlBodyContactList">

				{contactElements}

				{console.log(contactElements)}	
				
			</ul>

		)

	}	
}



