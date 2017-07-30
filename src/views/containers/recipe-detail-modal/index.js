import React, { Component } from 'react';
import { connect } from 'react-redux';

import RecipeDetailModal from 'src/views/components/recipe-detail-modal';

export class RecipeDetailModalContainer extends Component {
  constructor (props) {
    super(...arguments);
    this.props = props;

  }

  render() {
    if(this.props.currentRecipeId) {
      return (
        <RecipeDetailModal
          title="Recipe Detail"
          recipeDetail={this.props.recipeDetails[this.props.currentRecipeId]}
        />
      );
    }else {
      return (<div/>);
    }
  }
}

function mapStateToProps(state) {
  return {
    recipeDetails:state.recipe_details.recipeDetails,
    currentRecipeId:state.recipe_details.currentRecipeId,
  };
}
export default connect(mapStateToProps)(RecipeDetailModalContainer);