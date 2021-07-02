import { FC } from 'react';

export interface IRoutes {
  path: string;
  name: string;
  exact: boolean;
  component: FC;
}
