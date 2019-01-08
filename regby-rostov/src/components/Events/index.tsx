import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './style.scss'

interface State {
	events: {
		title: string;
		date: string;
		text: string
	}[]
}

export class Events extends React.PureComponent<void, State>{
	state:State = {events: []};
	componentDidMount(){
		axios.get('api/events/').then(res => {
			this.setState({events: res.data});	
		})
	}
	render(){
		const {
			events,
		} = this.state;
		return (
			<div>
			{
				events &&
				<div className='events-list'>
				{
					events.map(event =>
						<div className='events-item'>
							<div> {event.title} </div>
							<div> {event.text} </div>
							<div> {event.date} </div>
						</div>
					)
				}
				</div>
			}
			</div>
		)
	}
}