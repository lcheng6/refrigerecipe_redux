import React from 'react'
import { CardColumns } from 'reactstrap';

import RecipeList from '../../containers/recipe-list'
import NavBar from '../../components/navbar'

const GetRecipes = () => {
  return (
    <div>
      <NavBar/>
      <CardColumns>
        <RecipeList/>
      </CardColumns>
    </div>
  )
}

export default GetRecipes
