import React, {Component} from 'react'

class Body extends Component {

	state = {
		showOtherInfo: false,
		editContact: false
	}

	funcEditContact = () => {
		this.setState({
			editContact: !this.state.editContact
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

		return(

			<div className="two column centered row">

		    <div className="column">
					<div className="mini ui buttons right floated">
						<button onClick={this.funcShowOtherInfo} className="ui blue basic button">{this.state.showOtherInfo ? 'Скрыть' : 'Подробнее'}</button>					 
					  <button onClick={this.funcEditContact} className="ui green basic button">{this.state.editContact ? 'Сохранить' : 'Редактировать'}</button>					  
					  <button className="ui red basic button">Удалить</button>
					</div>
				</div>

		    <div className="column">
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

			</div>	

	  	/*<div className="ui one column centered grid">
				<div className="two column centered row">

			    <div className="column">
			    	<div className="mini ui buttons right floated">			  
						  <button className="ui green basic button">Сохранить</button>					 
						</div>
					</div>	    		

			    <div className="column">						    	
		    		<div className="ui large list">
						  <div className="item">
						    <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/large/christian.jpg" />
						    <div className="content">

						      <a className="header">
						      	<div className="ui mini input focus">
									 	 <input type="text" />
										</div>
									</a>

						      <div className="description">
						      	<div className="ui mini input focus">
									 	 <input type="text"/>									
										</div>						      
						      </div>

						      <div className="description">
						      	<div className="ui mini input focus">									 	 
									 	 <input type="text" />
										</div>						      
						      </div>

						   	</div>
						  </div>
						</div>
				  </div>	    		

		  	</div>			  
			/div>*/

	  )

	}

}

export default Body 