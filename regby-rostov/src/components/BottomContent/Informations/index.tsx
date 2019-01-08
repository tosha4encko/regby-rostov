import React from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

interface State{
	informations: {
		title: string;
		text: string;
	}[]
}
export class Informations extends React.PureComponent<void, State>{
	state:State = {informations: []};
	componentDidMount(){
		axios.get('api/informations/').then(res => {
			this.setState({informations: res.data});	
		})
	}
	render() {
		let {
			informations,
		} = this.state;
		return (
			<div className='information'>
				<div className='title'>
					Последняя информация
				</div>
				{
					informations.map(information => 
						<div key={information.id} className='information-item'>		
							<div>
								{information.title}
							</div>
						</div>
					)
				}
				<Link to={'/informations'}> вся информация... </Link>
			</div>
		)
	}
} 