import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeBoardCard from '../../components/card-recipe-board'
import { fetchRecipes } from '../../../core/get-recipes'
//
// const RecipeList = () => {
//   return (
//     <RecipeBoardCard/>
//   )
// }
class RecipeList extends Component {
  componentWillMount() {
                                    // temporarily hard-coded
    this.props.dispatch(fetchRecipes('apples%2Cflour%2Csugar'))
  }
  fetchRecipes = () => {
    this.props.dispatch(fetchRecipes('apples%2Cflour%2Csugar'))
  }
  renderList = () => {
    const { recipes } = this.props
    if (!recipes.recipes.length) {
      return <button onClick={this.fetchRecipes}></button>
    }
    return recipes.map((recipe) => {
      return (
        <RecipeBoardCard key={recipe.recipes.title} title={recipe.recipes.id}/>
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderList}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(RecipeList)
// export default RecipeList
