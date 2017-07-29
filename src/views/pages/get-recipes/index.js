import React from 'react'
import { CardColumns } from 'reactstrap';

import FullWidthResponsive from '../../components/layout/full-width'
import RecipeList from '../../containers/recipe-list';
import RecipeDetailModal from '../../containers/recipe-detail-modal';

const GetRecipes = () => {
  return (
    <div>
      <div>
        <RecipeDetailModal/>
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
