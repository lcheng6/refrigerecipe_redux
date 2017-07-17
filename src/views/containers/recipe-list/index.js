import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeBoardCard from '../../components/card-recipe-board'

class RecipeList extends Component {
  renderList = () => {
    return this.props.recipes.map((recipe) => {
      return (
        <RecipeBoardCard key={recipe.title} title={recipe.title}/>
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
