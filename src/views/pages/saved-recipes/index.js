import React from 'react';
import { CardColumns } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { List } from 'immutable';
import { savedRecipesActions, getVisibleItems } from 'src/core/saved-recipes-firebase';
import FullWidthResponsive from 'src/views/components/layout/full-width';
import SavedRecipeList from 'src/views/containers/saved-recipe-list';
import RecipeDetailModalContainer from 'src/views/containers/recipe-detail-modal';

const GetSavedRecipes = () => {
  //TODO replace this with correction Modal Container
  return (
    <div>
      <div>
        <RecipeDetailModalContainer/>
      </div>
      <div>
        <FullWidthResponsive>
          <CardColumns>
            <SavedRecipeList/>
          </CardColumns>
        </FullWidthResponsive>
      </div>
    </div>
  );
};

export default GetSavedRecipes;