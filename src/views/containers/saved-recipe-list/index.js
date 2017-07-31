import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import PropTypes from 'prop-types';

import SavedRecipeCard from 'src/views/components/saved-recipe-card';


class SavedRecipeList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //nothing to be done here.
  }

  renderSavedRecipes() {
    return this.props.recipes.map((recipe, index) => {
      return (
        <SavedRecipeCard
          key={index}
          recipe={recipe}
        />
      );
    });
  }

  render() {
    return (
      // !this.props.fetching ? <PacmanLoader/> :
      <div>
        {this.renderSavedRecipes()}
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
    // recipes: state.intro_recipes.recipes,
    // fetching: state.intro_recipes.fetching,
    // items: state.fridge.items,
    // recipeDetails: state.recipe_details.recipeDetails
    recipes:state.saved_recipes.items,
  };

}

const mapDispatchToProps = {
  // whenever getRecipes is called, the result should
  // be passed to our reducers
};

SavedRecipeList.propTypes = {
  recipes:PropTypes.instanceOf(List),
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedRecipeList);
