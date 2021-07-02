import { IRoutes } from 'types'

import Home from 'views/Home'
import Continents from 'views/Continents'
import Countries from 'views/Countries'

export const routes: IRoutes[] = [
  {
		path: '/',
		name: 'Link',
    exact: true,
		component: Home
	},	{
		path: '/continents',
		name: 'Continents List',
    exact: true,
		component: Continents
	},	
  {
		path: '/continents/:code',
		name: 'Countries list',
    exact: true,
		component: Countries
	},
]