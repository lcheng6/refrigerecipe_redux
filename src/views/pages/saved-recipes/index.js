import React from 'react';
import { CardColumns } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { List } from 'immutable';
import { savedRecipesActions, getVisibleItems } from 'src/core/saved-recipes-firebase';
import FullWidthResponsive from '../../components/layout/full-width';
import SavedRecipeList from '../../containers/saved-recipe-list';

const GetSavedRecipes = () => {
  return (
    <div>
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