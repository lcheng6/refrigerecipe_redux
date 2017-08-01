import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import PropTypes from 'prop-types';

import SavedRecipeCard from 'src/views/components/saved-recipe-card';
import { recipeDetailCardInteractionActions }  from "src/core/get-recipe-detail";

//TODO: remove this
import { getRecipeDetailActions }  from "src/core/get-recipe-detail";


class SavedRecipeList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var annyang = window.annyang;
    // var startFirework = window.startFirework;

    if (annyang) {

      // Let's define a command.
      var commands = {
        'hello': function () {
          console.log("Hello World");
          //this.props.recipeDetailCardShowModal(true);
        }.bind(this),
        'show recipe': function() {
          console.log("Show first recipe");
        }.bind(this),
        'show seoncd recipe': function() {
          console.log("Show second recipe");
        }.bind(this),
        'show third recipe': function() {
          console.log("Show third recipe");
        }.bind(this),
        'show next recipe': function() {
          console.log("Show next recipe");
        }.bind(this),
        'scroll up': function() {
          console.log("Show next recipe");
        }.bind(this),
        'scroll down': function() {
          console.log("Show next recipe");
        }.bind(this),
        'show easter egg': function() {
          console.log('show easter egg');
        }
      };

      // Add our commands to annyang
      annyang.addCommands(commands);

      // Start listening.
      annyang.start();
    }
  }

  renderSavedRecipes() {
    return this.props.recipes.map((recipe, index) => {
      if(recipe.isEasterEgg) {
        //TODO: verify this part
        // return (
        //   <SavedRecipeCard
        //     key={index}
        //     recipe={recipe}
        //     getRecipeDetail={this.props.getRecipeDetail}
        //     recipeDetailCardShowModal = {this.props.recipeDetailCardShowModal}
        //   />
        // );
        return null;
      }else {
        return (
          <SavedRecipeCard
            key={index}
            recipe={recipe}
            getRecipeDetail={this.props.getRecipeDetail}
            recipeDetailCardShowModal = {this.props.recipeDetailCardShowModal}
          />
        );
      }
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
  getRecipeDetail:getRecipeDetailActions.getRecipeDetail,
  recipeDetailCardShowModal:recipeDetailCardInteractionActions.recipeDetailCardToggle,
};

SavedRecipeList.propTypes = {
  recipes:PropTypes.instanceOf(List),
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedRecipeList);
