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

GetSavedRecipes.PropTypes = {
  items: PropTypes.instanceOf(List),
};
const mapStateToProps = state => ({
  // items: state.fridge.items
  items: getVisibleItems(state)
});

const mapDispatchToProps = {
  createItem: savedRecipesActions.createItem,
  removeItem: savedRecipesActions.removeItem,
  filterItems: savedRecipesActions.filterItems,
  updateItem: savedRecipesActions.updateItem
};
export default GetSavedRecipes;