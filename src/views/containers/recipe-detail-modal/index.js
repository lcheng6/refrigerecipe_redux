import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import RecipeDetailModal from 'src/views/components/recipe-detail-modal';
import {recipeDetailCardToggle} from 'src/core/get-recipe-detail';

export class RecipeDetailModalContainer extends Component {
  constructor (props) {
    super(...arguments);
    this.props = props;

  }

  //TODO: investigate whether declaring render is in container is
  //pattern or anti-pattern
  render() {
    if(this.props.currentRecipeId) {
      let recipeSummaryIndex = _.findIndex(this.props.recipeSummaries,
        function(elem) {
          return elem.id === this.props.currentRecipeId;
        }.bind(this)
      );

      return (
        <RecipeDetailModal
          title="Recipe Detail"
          recipeDetail={this.props.recipeDetails[this.props.currentRecipeId]}
          recipeSummary={this.props.recipeSummaries[recipeSummaryIndex]}
          cardToggle={this.props.cardToggle}
          modal={this.props.modal}
        />
      );
    }else {
      return null;
    }
  }
}

const mapStateToProps= (state) => ({
    recipeDetails:state.recipe_details.recipeDetails,
    currentRecipeId:state.recipe_details.currentRecipeId,
    recipeSummaries:state.intro_recipes.recipes,
    modal:state.recipe_details.toggle,
});

const mapDispatchToProps= {
    cardToggle: recipeDetailCardToggle
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetailModalContainer);