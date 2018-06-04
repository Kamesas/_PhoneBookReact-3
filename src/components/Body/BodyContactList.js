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
	
  updateText = (text, i) => {
    var arr = this.state.stateBoxContact;
    arr[i] = text;
    this.setState ({stateBoxContact: arr});
  };

	render(){
	
		const contactElements = this.props.boxContact.map ((contact, index) => 					
						<li key = {contact.id}  >
							<Body index={index} contact={contact} updateText={this.updateText} deleteBlock={this.deleteBlock} /><hr/>
						</li>
					)

		return (
			<ul className="UlBodyContactList">
				{contactElements}					
			</ul>
		)

	}	
}



