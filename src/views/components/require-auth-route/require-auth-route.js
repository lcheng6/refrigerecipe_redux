import React from 'react';
import { Route, Redirect } from 'react-router-dom'

// https://reacttraining.com/react-router/web/api/Route/render-func

const RequireAuthRoute = ({component: Component, authenticated, ...rest}) => (
  <Route {...rest}
    render={props => {
      return authenticated ?
      ( <Component {...props}/> )
      :
      // https://reacttraining.com/react-router/web/api/Redirect
      ( <Redirect to={{  pathname: '/sign-in', state: {from: props.location} }}/> )
    }}
  />
)


export default RequireAuthRoute;
