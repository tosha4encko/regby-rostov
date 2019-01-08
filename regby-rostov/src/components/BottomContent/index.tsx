import React from 'react'
import {Events} from './Events'
import {Informations} from './Informations'

import './style.scss'

export class BottomContent extends React.PureComponent<>{

	render(){
		return(
			<div className='bottom-content'>
				<div className='content'>
					<Events/>
					<Informations/>
				</div>
			</div>
		)
	}
} 