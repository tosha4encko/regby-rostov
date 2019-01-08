import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './style.scss'

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
	render(){
		const {
			informations,
		} = this.state;
		return (
			<div>
			{
				informations &&
				<div className='informations-list'>
				{
					informations.map(information =>
						<div className='informations-item'>
							<div> {information.title} </div>
							<div> {information.text} </div>
						</div>
					)
				}
				</div>
			}
			</div>
		)
	}
}