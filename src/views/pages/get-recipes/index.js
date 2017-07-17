import React from 'react'
import { CardColumns } from 'reactstrap';

import FullWidthResponsive from '../../components/layout/full-width'
import RecipeList from '../../containers/recipe-list'
import NavBar from '../../components/navbar'

const GetRecipes = ({key, title}) => {
  return (
    <div>
      <NavBar/>
      <FullWidthResponsive>
        <CardColumns>
          <RecipeList/>
        </CardColumns>
      </FullWidthResponsive>
    </div>
  )
}

export default GetRecipes
