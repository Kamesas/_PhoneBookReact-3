import React, {Component} from 'react'

class AddContact extends Component {

	funcAddContact = () => {
		alert('Добавить контакт')
	}
	
	render() {	

		return(

			<button onClick={this.funcAddContact} className="ui right floated blue button">
				Добавить контакт
			</button>
	  	
	  )

	}

}

export default AddContact 