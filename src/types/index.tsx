import { FC } from 'react';

export interface IRoutes {
  path: string;
  name: string;
  exact: boolean;
  component: FC;
}

export interface IContinent {
  name: string;
  code: string;
}

export interface ICountry {
  name: string;
  emoji: string;
  languages: Array<{ name: string }>;
}
