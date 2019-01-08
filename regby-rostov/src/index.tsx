import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {LayOut} from './layout/'

import './scss/base.scss'

import { HashRouter } from 'react-router-dom'

ReactDOM.render(
	<HashRouter>
 		<LayOut/> 
  </HashRouter>,
  document.getElementById("book")
);