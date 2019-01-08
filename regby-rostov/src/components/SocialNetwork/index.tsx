import React from 'react'
import './style.scss';

export class SocialNetwork extends React.PureComponent<>{
	
	render(){
		return(
			<div className='social'>
				<span className='vk'>
					<a href='#'>вконтакте</a>
				</span>
				<span className='tw'>
					<a href='#'> twitter </a>
				</span>
				<span className='inst'>
					<a href='#'> instagram </a>
				</span>
			</div>
		)
	}
}