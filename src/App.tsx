import { Route, RouteProps } from 'react-router-dom';

import { routes } from 'routes';

function App() {
  return (
    <>
      {routes.map((route: RouteProps, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        );
      })}
    </>
  );
}

export default App;
