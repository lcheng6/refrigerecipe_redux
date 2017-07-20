import React, { Component } from 'react';
import { Route } from 'react-router'

import SignIn from './views/pages/sign-in'
import SignUp from './views/pages/sign-up'
import GetRecipes from './views/pages/get-recipes'

export default class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={SignIn}/>
        <Route path="/sign-up" component={SignUp}/>
        <Route path="/sign-in" component={SignIn}/>
        <Route path="/get-recipes" component={GetRecipes}/>
      </div>
    );
  }
}
