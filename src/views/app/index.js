import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { authActions, getAuth } from 'src/core/auth';
import NavBar from 'src/views/components/navbar'

import RequireAuthRoute from 'src/views/components/require-auth-route';
import RequireUnauthRoute from 'src/views/components/require-unauth-route';
import SignIn from 'src/views/pages/sign-in';
import GetRecipes from 'src/views/pages/get-recipes'
import Fridge from 'src/views/pages/fridge'


const App = ({authenticated, signOut}) => (
  <div>
    <NavBar
      authenticated={authenticated}
      signOut={signOut}
    />

    <main>
      <RequireAuthRoute authenticated={authenticated} exact path="/" component={Fridge}/>
      <RequireAuthRoute authenticated={authenticated} path="/get-recipes" component={GetRecipes}/>
      <RequireUnauthRoute authenticated={authenticated} path="/sign-in" component={SignIn}/>
    </main>
  </div>
);


App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = getAuth;

const mapDispatchToProps = {
  signOut: authActions.signOut
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
