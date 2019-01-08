import React from 'react'
import { Link } from 'react-router-dom'

import {ListItem} from './ListItem';
import axios from 'axios'
import './style.scss'

interface State{
	news: {
		title: string;
		img: string;
		text: string;
	}[];
	activeItem?: number;
	acriveItemHov?: number;
	isMouseEnter: boolean;
}

interface Props{
	page?: number;
	idItem?: number;
}

export class NewsList extends React.PureComponent<Props, State>{
	state:State = {
		news: [], 
		activeItem: 0,
		isMouseEnter: false,
		isOpenedList: false,
	};
	componentDidMount(){
		let page = this.props.page
		if (page === undefined){
			page=1;
		}
		axios.get(`api/news/?page=${page}`).then(res => {
			this.setState({news: res.data})
		})
	}
	render(){
		const {
			news,
			activeItem,
			isMouseEnter,
			isOpenedList,
		} = this.state;
		const {
			idItem,
			page,
		} = this.props.match.params;
		return(
			news &&
			news.length > 0 &&
			(
				idItem === undefined &&
				(
					page !== undefined &&
					<div className='news-item-list'>
					{
						news.map((item, i) => 
							<ListItem 
								key={item.id}
								id={i}
								img={item.img}
								title={item.title}
								text={news[activeItem].text}
								setActiceItem={id => this.setState({activeItem: id})}
								isList={true}
								setSelectedItem={this.setSelectedItem}
							/>
						)
					}
					</div>
					||
					<>
					<div className='news-list'>
						<ListItem 
							key={news[activeItem].id}
							id = {activeItem}
							title={news[activeItem].title}
							img={news[activeItem].img}
							text={news[activeItem].text}
							isList={false}
						  setSelectedItem={this.setSelectedItem}
						/>
						<div className='list-sub-items'>
						{
							news.map((item, i) => 
								<ListItem 
									key={item.id}
									id={i}
									title={item.title}
									setActiceItem={id => this.setState({activeItem: id})}
									isList={isOpenedList}
								/>
							)
						}
						</div>
					</div>
					<Link to={'/news/1'}>
						<div 
							className={isMouseEnter ? 'open-news-button active' : 'open-news-button'}
							onMouseEnter={() => this.setState({isMouseEnter: true})}
							onMouseLeave={() => this.setState({isMouseEnter: false})}
						> 
							Читать еще новости 
						</div>
					</Link>
				</>
				)
				||
				<>
					<div className='selected-item'>
						<img src={news[idItem].img}/>
						<div> {news[idItem].title} </div>
						<div className='item-text'> {news[idItem].text} </div>
					</div>
					<Link to={'/news/1'}>
						<div 
								className={isMouseEnter ? 'open-news-button active' : 'open-news-button'}
								onMouseEnter={() => this.setState({isMouseEnter: true})}
								onMouseLeave={() => this.setState({isMouseEnter: false})}
							> 
								Читать еще новости 
						</div>
					</Link>
				</>
			)
		)
	}
}