import React, { Suspense, useContext } from 'react';
import { Route, Switch, Redirect, RouteProps } from 'react-router-dom'

import Main from './components/layout/Main';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import Spinner from './components/UI/Spinner';

import AuthContext from './store/auth-context';


const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const AddWork = React.lazy(() => import('./pages/AddWork'));
const Login = React.lazy(() => import('./pages/Login'));
const Settings = React.lazy(() => import('./pages/Settings'));
const NewPassword = React.lazy(() => import('./pages/NewPassword'));
const AddProject = React.lazy(() => import('./pages/AddProject'));



const routesNotLogged: RouteProps[] = [
  { path: "/login", render: () => <Login /> },
  { path: "/", render: () => <Home />, exact: true },
  { path: "/about", render: () => <About />, exact: true },
  {
    path: "*", render: () => {
      return <Redirect to="/" />
    }
  }
];

const routesLogged: RouteProps[] = [
  { path: "/", render: () => <Home />, exact: true },
  { path: "/settings", render: () => <Settings />, exact: true },
  { path: "/add-work-experience", render: () => <AddWork />, exact: true },
  { path: "/new-password", render: () => <NewPassword />, exact: true },
  { path: "/about", render: () => <About />, exact: true },
  { path: "/add-project", render: () => <AddProject />, exact: true },
  {
    path: "*", render: () => {
      return <Redirect to="/" />
    }
  }
];



function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Main>
      <Header />
      <Suspense fallback={<Spinner/>}>
        <Switch>
          {(authCtx.isLoggedIn ? routesLogged : routesNotLogged).map((route, index) => <Route key={index} path={route.path} render={route.render} exact={route.exact || false} />)}
        </Switch>
      </Suspense>
      <Footer />
    </Main>
  );
}

export default App;
