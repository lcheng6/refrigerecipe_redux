import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import RecipeDetailModal from 'src/views/components/recipe-detail-modal';

export class RecipeDetailModalContainer extends Component {
  constructor (props) {
    super(...arguments);
    this.props = props;

  }

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
        />
      );
    }else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return {
    recipeDetails:state.recipe_details.recipeDetails,
    currentRecipeId:state.recipe_details.currentRecipeId,
    recipeSummaries:state.intro_recipes.recipes,
  };
}
export default connect(mapStateToProps)(RecipeDetailModalContainer);