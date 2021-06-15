import React, { useContext } from 'react';
import { Route, Switch, Redirect, RouteProps } from 'react-router-dom'

import Main from './components/layout/Main';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import Home from './pages/Home';
import About from './pages/About';
import AddWork from './pages/AddWork';
import Login from './pages/Login';
import PasswordRecovery from './pages/PasswordRecovery';
import AuthContext from './store/auth-context';
import Settings from './pages/Settings';


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
  { path: "/add-work-esperance", render: () => <AddWork />, exact: true },
  { path: "/new-password", render: () => <PasswordRecovery />, exact: true },
  { path: "/about", render: () => <About />, exact: true },
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
      <Switch>
        {(authCtx.isLoggedIn ? routesLogged : routesNotLogged).map((route, index) => <Route key={index} path={route.path} render={route.render} exact={route.exact || false} />)}
      </Switch>
      <Footer />
    </Main>
  );
}

export default App;
