import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './style.scss'

export class History extends React.PureComponent<void, void>{
	render(){
		return (
			<div className='history'>
				<div className='title'> История ростовского регби </div>
				<div className='history-item'> ... </div>
				<div className='history-item'> ... </div>
				<div className='history-item'> ... </div>
			</div>
		)
	}
}