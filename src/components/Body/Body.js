import React, {Component} from 'react'

class Body extends Component {

	state = {
		showOtherInfo: false,
		editContact: false,
	}

	funcEditContact = () => {
		this.setState({
			editContact: !this.state.editContact			
		})		
	}

	funcDelContact = () => {
		this.props.deleteBlock(this.props.index);
  };

	funcSaveContact = () => {
		//var valueFirstName = this.valueFirstName.value;﻿
		// var valueName = this.valueName.value;﻿
		//var valueNumPhone = this.valueNumPhone.value;﻿
		// var valueEmail = this.valueEmail.value;﻿
		// var valueCompany = this.valueCompany.value;﻿

		this.props.updateText(this.valueFirstName.value, this.props.index);	
		console.log(this.valueFirstName.value, this.props.index)
    this.setState({
			editContact: false		
		})		
	}

	funcShowOtherInfo = () => {
		this.setState({
			showOtherInfo: !this.state.showOtherInfo
		})
	}	

	render() {
	
		const {contact} = this.props
	 	const otherDate = this.state.showOtherInfo && <div className="description">{contact.email}<br/>{contact.company}</div>
	 	const startScreenBtn = <div className="column">
															<div className="mini ui buttons right floated">
																<button onClick={this.funcShowOtherInfo} className="ui blue basic button">{this.state.showOtherInfo ? 'Скрыть' : 'Подробнее'}</button>					 
															  <button onClick={this.funcEditContact}  className="ui green basic button">{this.state.editContact ? 'Сохранить' : 'Редактировать'}</button>															 				  
															  <button onClick={this.funcDelContact} className="ui red basic button">Удалить</button>
															</div>
														</div>

		const saveScreenBtn = <div className="column">
														<div className="mini ui buttons right floated">															  
														  <button onClick={this.funcSaveContact}  className="ui green basic button">Сохранить</button>														  
														</div>
													</div>

	 	const startScreen = <div className="column">
											    <div className="ui large animated list">
													  <div className="item">
													    <img className="ui avatar image" src={contact.foto} alt="alt" />
													    <div className="content">
													      <a className="header">{contact.firstName} {contact.name}</a>
													      <div className="description">{contact.numPhone}</div>
													      {otherDate}					      					      				      
													    </div>
													  </div>
													</div>
											  </div>

		const editScreen = <div className="column">
											    <div className="ui large list">
													  <div className="item">
													    <img className="ui avatar image" src={contact.foto} alt="alt" />
													    <div className="content">
													      <a className="header">
													      	<input type="text" ref={(input) => { this.valueFirstName = input; }} defaultValue={contact.firstName} /><br/>
													       	<input type="text" defaultValue={contact.name} />
													      </a>
													      <div className="description">
													      	<input type="text" defaultValue={contact.numPhone} />
													      </div>
													      <div className="description">
														      <input type="text" defaultValue={contact.email} /><br/>
														      <input type="text" defaultValue={contact.company} />
													      </div>				      					      				      
													    </div>
													  </div>
													</div>
											  </div>

		return(
			<div className="two column centered row">
		    {this.state.editContact ? saveScreenBtn : startScreenBtn }
				{this.state.editContact ? editScreen : startScreen }
			</div>	  	
	  )

	}

}

export default Body 