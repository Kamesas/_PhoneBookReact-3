import React from 'react'
import Body from './Body'
import './body.css'

export default function BodyContactList ({boxContact}) {

	const contactElements = boxContact.map(contact => <li key = {contact.id}><Body contact={contact} /><hr /></li>)

	return (

		<ul className="UlBodyContactList">
			{contactElements}
		</ul>

	)
}