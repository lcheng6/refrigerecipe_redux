import React from 'react';
import { CardColumns } from 'reactstrap';

import FullWidthResponsive from 'src/views/components/layout/full-width'
import RecipeList from 'src/views/containers/recipe-list';
import RecipeDetailModalContainer from 'src/views/containers/recipe-detail-modal';

const GetRecipes = () => {
  return (
    <div>
      <div>
        <RecipeDetailModalContainer/>
      </div>
      <div>
        <FullWidthResponsive>
          <CardColumns>
            <RecipeList/>
          </CardColumns>
        </FullWidthResponsive>
      </div>
    </div>
  );
};

export default GetRecipes;
