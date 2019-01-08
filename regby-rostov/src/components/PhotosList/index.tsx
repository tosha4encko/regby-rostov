import React from 'react';
import axios from 'axios';
import './style.scss'

interface State {
	photos?: {
		id: number;
		image: string;
	}[]
}

export class PhotosList extends React.PureComponent<void, State>{
	state:State = {}
	componentDidMount(){
		let idAlbom = this.props.match.params.idAlbom;
		axios.get(`api/photos/${idAlbom}`).then(res => {
			this.setState({photos: res.data})
		})
	}
	render(){
		const {
			photos,
		} = this.state;
		return (
			<div>
			{
				photos &&
				<div className='photo-list'>
				{
					photos.map(photo => 
						<div key={photo.id} className='photo-item'>
							<a href={photo.image}> <img src={photo.image}/> </a>
						</div>
					)
				}
				</div>
			}
			</div>
		)
	}
}