import React from 'react'
import Body from './Body'

export default function BodyContactList ({boxContact}) {
	return (

		<ul>
			<li><Body contact={boxContact[0]} /></li>
			<li><Body contact={boxContact[1]} /></li>
			<li><Body contact={boxContact[2]} /></li>
		</ul>

	)
}