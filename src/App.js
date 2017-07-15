import React from 'react'
import { Route, Switch } from 'react-router' /* react-router v4 */
import { ConnectedRouter } from 'connected-react-router'
// local pages
import Fridge from './views/pages/fridge'
import Recipes from './views/pages/recipes'
import MyRecipes from './views/pages/my-recipes'
import Cart from './views/pages/cart'
import SignIn from './views/pages/sign-in'
import Home from './views/pages/home'
// local components
import Header from './views/components/header'
import Footer from './views/components/footer'


const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <div id="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/fridge" component={Fridge} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/my-recipes" component={MyRecipes} />
        <Route path="/cart" component={Cart} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    <Footer />
  </div>
</ConnectedRouter>
)

export default App
