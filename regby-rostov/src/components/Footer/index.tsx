import React from 'react'
import './style.scss'

export class Footer extends React.PureComponent<>{
	render(){
		return(
			<div className='footer'>
				<div>
					<img src='/media/feder.png'/> 
					<img src='/media/tild.png'/> 
					<img src='/media/Logotip.png'/>
				</div>
				<div>
					2018-2018
				</div>
			</div>
		)
	}
} 