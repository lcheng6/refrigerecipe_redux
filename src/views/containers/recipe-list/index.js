import React, { Component } from 'react';
import { connect } from 'react-redux';

import RecipeCardIntro from 'src/views/components/recipe-card-intro';
import { getRecipesActions } from 'src/core/get-recipes';
import { getRecipeDetailActions, recipeDetailCardToggle } from "src/core/get-recipe-detail";

class RecipeList extends Component {
  constructor(props) {
    super(props);
    // =====================  HARD CODED ==========================
    // this.props.getRecipes('rice,eggs,tortillas,sausage')
  }
  // getRecipes is available on props cuz bindActionCreators
  // registers it and 'connect' it with react as props below
  componentDidMount() {
    console.log("items in state = " + this.props.items.map(item => item.get('title')).toJS());
    let ingredients = this.props.items.map(item => item.get('title')).toJS();
    //let call = encodeURIComponent(ingredients);
    this.props.getRecipes(ingredients);
  }

  renderRecipes() {
    return this.props.recipes.map((recipe) => {
      return (
        <RecipeCardIntro
          key={recipe.id}
          title={recipe.title}
          usedCount={recipe.usedIngredientCount}
          missedCount={recipe.missedIngredientCount}
          image={recipe.image}
          recipeId={recipe.id}
          getRecipeDetail={this.props.getRecipeDetail}
          recipeDetailCardShowModal={this.props.recipeDetailCardShowModal}
          recipeDetail = "Nothing"
         />
      );
    });
  }

  render() {
    return (
      // !this.props.fetching ? <PacmanLoader/> :
      <div>
        {this.renderRecipes()}
      </div>
    );
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
    fetching: state.intro_recipes.fetching,
    items: state.fridge.items,
    // recipeDetails: state.recipe_details.recipeDetails
  };
}

const mapDispatchToProps = {
  // whenever getRecipes is called, the result should
  // be passed to our reducers
  getRecipes: getRecipesActions.getRecipes,
  getRecipeDetail: getRecipeDetailActions.getRecipeDetail,
  recipeDetailCardShowModal: recipeDetailCardToggle,
};
// promote RecipeList from a component to a container class
// it needs to know about this new dispatch method, getRecipes
// Make it available as a prop of the container
export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
