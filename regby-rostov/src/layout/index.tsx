import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'

import {
	Header, SocialNetwork,
	BottomContent, Footer, AlbomList,
} from '../components/';

import {NewsList} from '../components/NewsList/'
import {AlbomsList} from '../components/AlbomsList/'
import {PhotosList} from '../components/PhotosList/'
import {History} from '../components/History/';
import {Club} from '../components/Club/';
import {Events} from '../components/Events/';
import {Informations} from '../components/Informations/';

export class LayOut extends React.Component<Props, State> {
	render(){
		return(
			<>
				<Header/>
				<SocialNetwork/>
				<div className='general-content'>				
					<Switch>
						<Route exact path='/' component={NewsList}/>
						<Route path='/news/:page' component={NewsList}/>
						<Route path='/new/:idItem' component={NewsList}/>
						<Route path='/alboms/:idAlbom' component={PhotosList}/>
						<Route path='/alboms' component={AlbomsList}/>

						<Route path='/history' component={History}/>
						<Route path='/club' component={Club}/>
						<Route path='/events' component={Events}/>
						<Route path='/informations' component={Informations}/>
					</Switch>
				</div>
				<BottomContent/>
				<Footer/>
			</>
		)
	}
}
				