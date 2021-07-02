import { IRoutes } from 'types'

import Home from 'views/Home'
import Continents from 'views/Continents'
import Countries from 'views/Countries'

export const routes: IRoutes[] = [
  {
		path: '/',
		name: 'Link',
		component: Home
	},	{
		path: '/continents',
		name: 'Continents List',
		component: Continents
	},	{
		path: '/continents/:code',
		name: 'Countries list',
		component: Countries
	},
]