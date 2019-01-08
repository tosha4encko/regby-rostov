import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './style.scss'

interface State {
	alboms?: {
		id: number;
		title: string;
		pub_date: string;
		image: string;
	}[]
}

export class AlbomsList extends React.PureComponent<void, State>{
	state:State = {}
	componentDidMount(){
		axios.get(`api/alboms/`).then(res => {
			this.setState({alboms: res.data})
		})
	}
	render(){
		const {
			alboms,
		} = this.state;
		return (
			<div>
			{
				alboms &&
				<div className='albom-list'>
				{
					alboms.map(albom =>
						<Link key={albom.id} to={`/alboms/${albom.id}`}>
							<div className='albom-item'>
								<div> {albom.title} </div>
								<div> <img src={albom.image}/> </div>
								<div className='time'>{albom.pub_date}</div>
							</div>
						</Link>
					)
				}
				</div>
			}
			</div>
		)
	}
}