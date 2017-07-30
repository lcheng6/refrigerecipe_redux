import React from 'react';
import { CardColumns } from 'reactstrap';
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