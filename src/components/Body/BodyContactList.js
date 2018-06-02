import React from 'react'
import Body from './Body'

export default function BodyContactList ({boxContact}) {

	const contactElements = boxContact.map(contact => <li key = {contact.id}><Body contact={contact} /></li>)

	return (

		<ul>
			{contactElements}
		</ul>

	)
}