import React from 'react'
import { Link } from 'react-router-dom'

interface Props{
	id: number;
	title: string;
	img?: string;
	text?: string;
	isList: boolean;

	setActiceItem(number): void;
	setSelectedItem(numer): void;
}

interface State{
	isMouseEnter: boolean;
}

export class ListItem extends React.PureComponent<Props>{
	
	state:State = {isMouseEnter: false};

	render(){
		const {
			id,
			title, 
			img,
			text,
			setActiceItem,
			setSelectedItem,
			isList,
		} = this.props;
		const {isMouseEnter} = this.state;

		return(
			text && img && 
			(
				!isList &&
				<Link to={`/new/${id}`}>
		   		<div className='general-item'>
						<img src={img}/>
						<div> {title} </div>
						<div className='item-text'> {text} </div>
					</div>
				</Link>	
				||
				<Link to={`/new/${id}`}>
					<div 
						className='item'
					>
						<img src={img}/>
						<div> {title} </div>
						<div className='item-text'> {text} </div>
					</div>
				</Link>
			)
			||
				<div 
					className={ isMouseEnter ? 'sub-item active' : 'sub-item' } 
					onClick={() => setActiceItem(id)}
					onMouseEnter={() => this.setState({isMouseEnter: true})}
					onMouseLeave={() => this.setState({isMouseEnter: false})}
				>
					<div> {title} </div>
				</div>
		)
	}
}