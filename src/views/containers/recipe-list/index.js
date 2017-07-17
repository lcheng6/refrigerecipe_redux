import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeCardIntro from '../../components/recipe-card-intro'
import { getRecipes } from '../../../core/get-recipes'

// const RecipeList = () => {
//   return (
//     <RecipeCardIntro/>
//   )
// }
//          // temporarily hard-coded
// getRecipes('apples%2Cflour%2Csugar')

class RecipeList extends Component {
  constructor(props) {
    super(props)
    this.state = { recipes: {} }
  }
  // componentWillMount() {
  //   this.props.dispatch(getRecipes)
  // }
  fetchRecipes = () => {
    this.props.dispatch(getRecipes)
  }
  renderList = (recipes) => {
    // const { recipes } = this.props
    if (!recipes.recipes) {
      return <RecipeCardIntro key="1" title="Didn't work"/>
    }
    return recipes.map((recipe) => {
      return (
        <RecipeCardIntro key={recipe.recipes.id} title={recipe.recipes.title}/>
      )
    })
  }

  render() {
    return (
      <div>
        <RecipeCardIntro />
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
