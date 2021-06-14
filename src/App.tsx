import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

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


function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Main>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        {!authCtx.isLoggedIn && <Route path="/login" component={Login} exact />}
        {authCtx.isLoggedIn && (
          <>
            <Route path="/add-works" component={AddWork} exact />
            <Route path="/settings" component={Settings} exact />
            <Route path="/new-password" component={PasswordRecovery} exact />
          </>
        )}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </Main>
  );
}

export default App;
