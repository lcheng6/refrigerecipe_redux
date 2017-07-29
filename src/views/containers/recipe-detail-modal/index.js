import React, { Component } from 'react';
import RecipeDetailModal from 'src/views/components/recipe-detail-modal';

export class RecipeDetailModalContainer extends Component {
  constructor (props) {
    super(...arguments);
    this.props = props;

  }

  render() {
    return (
      <RecipeDetailModal/>
    );
  }
}

export default RecipeDetailModalContainer;