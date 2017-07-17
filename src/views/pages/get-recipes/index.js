import React from 'react'

import RecipeList from '../../containers/recipe-list'
import FullWidthResponsive from '../../components/layout/full-width'
import NavBar from '../../components/navbar'

const GetRecipes = ({recipes}) => {
  return (
    <div>
      <NavBar/>
      <FullWidthResponsive>
        <RecipeList recipes={recipes}/>
      </FullWidthResponsive>
    </div>
  )
}

export default GetRecipes
