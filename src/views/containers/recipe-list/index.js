import React, { Component } from 'react'
import { connect } from 'react-redux'

import RecipeCardIntro from 'src/views/components/recipe-card-intro'
import { getRecipesActions } from 'src/core/get-recipes'

class RecipeList extends Component {
  // constructor(props) {
  //   super(props)
  //   =====================  HARD CODED ==========================
  //   this.props.getRecipes('rice,eggs,tortillas,sausage')
  // }
  // getRecipes is available on props cuz bindActionCreators
  // registers it and 'connect' it with react as props below
  // componentDidMount() {
  // }

  renderRecipes() {

    return this.props.recipes.map((recipe) => {
      return (
        <RecipeCardIntro
          key={recipe.id}
          title={recipe.title}
          usedCount={recipe.usedIngredientCount}
          missedCount={recipe.missedIngredientCount}
          image={recipe.image}
         />
      )
    })
  }
  render() {
    return (
      // !this.props.fetching ? <PacmanLoader/> :
      <div>
        {this.renderRecipes()}
      </div>
    )
  }
}

// This function maps a specific part of
// the state to the prop `recipes`.

// In larger apps it is often good
// to be more selective and only
// map the part of the state tree
// that is necessary.

function mapStateToProps(state) {
  // anything returned here will
  // end up as props on this container
  return {
    recipes: state.intro_recipes.recipes,
    fetching: state.intro_recipes.fetching
  }
}

// anything returned from this function will
// end up as props on this container
const mapDispatchtoProps = {
  // whenever getRecipes is called, the result should
  // be passed to our reducers
  getRecipes: getRecipesActions.getRecipes
}
// promote RecipeList from a component to a container class
// it needs to know about this new dispatch method, getRecipes
// Make it available as a prop of the container
export default connect(mapStateToProps, mapDispatchtoProps)(RecipeList)
