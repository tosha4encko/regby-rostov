import React from 'react';
import './style.scss';

import { Link } from 'react-router-dom'

export class Header extends React.PureComponent{

	render(){
		return(
			<div className='header'>
				<div className='logo-rk'>
					<img src='/media/Logotip.png'/>
				</div>
				<div className='navbar'>
					<div className='level'>
						<div>
							<Link to='/'> Главная </Link>
						</div>
						<div>
							<Link to={'/news/1'}> Новости </Link>
						</div>
						<div>
							<Link to={'/alboms'}> Галерея </Link>
						</div>
						<div>
							<Link to={'/history'}> История </Link>
						</div>
					</div>
					<div className='level'>
						<div>
							<Link to={'/events'}> События </Link>
						</div>
						<div>
							<Link to={'/club'}> Клуб </Link>
						</div>
						<div>
							<Link to={'/informations'}> Информация </Link>
						</div>
					</div>
				</div>
				<div className='logo-grant'>
					<img src='/media/pgrants_logo.png'/>
				</div>
			</div>
		)
	}
}