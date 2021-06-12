import React from 'react';
import { Route, Router, Switch } from 'react-router-dom'

import Main from './components/layout/Main';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import Home from './pages/Home';
import About from './pages/About';
import AddWork from './pages/AddWork';


function App() {
  return (
    <Main>
      <Header />
     
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} exact/>
          <Route path="/addWork" component={AddWork} exact/>
        </Switch>
     

      <Footer />
    </Main>
  );
}

export default App;
