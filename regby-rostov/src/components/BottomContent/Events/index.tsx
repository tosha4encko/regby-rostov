import React from 'react'
import axios from 'axios'

interface State{
	events: {
		title: string;
		date: string;
		text: string
	}[]
}
export class Events extends React.PureComponent<void, State>{
	state:State = {events: []};
	componentDidMount(){
		axios.get('api/events/?mod=new').then(res => {
			this.setState({events: res.data});	
		})
	}
	render() {
		let {
			events,
		} = this.state;
		return (
			<div className='event'>
				<div className='title'>
					Предстоящие события
				</div>
				<div className='content'>
				{
					events.map(event => {
						let date = new Date(event.date);
						var options = {
						  year: 'numeric',
						  month: 'numeric',
						  day: 'numeric',
						  timezone: 'Europe/Moscow',
						};
						return (
							<div key={event.id} className='event-item'>		
								<div className='event-title'>
									{event.title}
								</div>
								<div className='event-content'>
									<div>
										{event.date}
									</div>
									<div>
										{event.text}
									</div>
								</div>
							</div>
						)
					})
				}
				</div>
			</div>
		)
	}
} 