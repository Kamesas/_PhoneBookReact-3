import React, {Component} from 'react'
import Body from './Body'
import './body.css'

export default class BodyContactList extends Component {

	state = {
		stateBoxContact: this.props.boxContact		
	}
	
	deleteBlock = (i) => {
    var arr = this.state.stateBoxContact;    
    arr.splice (i, 1);
    this.setState ({stateBoxContact: arr});
  };
	
  // updateText = (text, i) => {
  //   var arr = this.state.contactElements;
  //   arr[i] = text;
  //   this.setState ({contactElements: arr});
  // };

	render(){
	
		const contactElements = this.props.boxContact.map ((contact, index) => 					
						<li key = {contact.id}  >
							<Body index={index} contact={contact} update={this.updateText} del={this.deleteBlock} /><hr/>
						</li>
					)


		return (			

			<ul className="UlBodyContactList">

				{contactElements}	
				
			</ul>

		)

	}	
}



