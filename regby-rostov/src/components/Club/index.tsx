import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './style.scss'

export class Club extends React.PureComponent<void, State>{
	render(){
		return (
			<div className='club' >
				<Link to='#'> Команда </Link>
				<Link to='#'> Тренерский штаб </Link>
			</div>
		)
	}
}