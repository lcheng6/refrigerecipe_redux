import React from 'react'
import { CardColumns } from 'reactstrap';
import FullWidthResponsive from '../../components/layout/full-width';
import RecipeList from '../../containers/recipe-list';

const GetSavedRecipes = () => {
  return (
    <div>
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

export default GetSavedRecipes;