import React from 'react';

class Header extends React.Component {

  render() {
      return ( 

				<div className="ui one column centered grid">

				  <div className="column">
				  	<h1 className="ui block center aligned header">Телефонная книга</h1>
					</div>

				  <div className="two column centered row">
				    <div className="column">Поиск</div>
				    <div className="column">Добавить  контакт</div>
				    <hr />
				  </div>

				</div>

			
      ); 
  }

}

export default Header;