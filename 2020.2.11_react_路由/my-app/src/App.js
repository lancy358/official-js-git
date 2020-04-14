import React, { Component } from 'react';
import {Route,Switch,Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Public from './components/Public'
import PublicId from './components/PublicId'
import PublicOne from './components/PublicOne'
import Page404 from './components/404'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <>
        <Link to="/">首页</Link>|
        <Link to="/about">关于</Link>|
        <Link to="/public/">公共页</Link>|
        <Link to="/public/one">公共1页</Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/public/" exact strict component={Public}/>
          <Route path="/public/one" component={PublicOne}/>
          <Route path="/public/:id" component={PublicId}/>
          <Route  component={Page404}/>
        </Switch>
      </>
    );
  }
}

export default App;


