import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import _ from 'lodash'
import RecipeCardIntro from '../../components/recipe-card-intro'
import { getRecipes } from '../../../core/get-recipes'

//          // temporarily hard-coded
// getRecipes('apples%2Cflour%2Csugar')

class RecipeList extends Component {
  constructor(props) {
    super(props)
    this.state = { recipes: [] }
  }
  // getRecipes is available on props cuz bindActionCreators
  // registers it and 'connect' it with react as props below
  componentDidMount() {
    this.props.getRecipes('flour,sugar,milk')
  }

  renderRecipes() {
    return _.map(this.state.recipes, recipe => {
      return (
        <RecipeCardIntro
          key={recipe.id}
          title={recipe.title}
          usedCount={recipe.usedIngredientCount}
          middedCount={recipe.missedIngredientCount}
          image={recipe.image}
         />
      )
    })
  }
  render() {
    return (
      <div>
        {this.renderRecipes()}
      </div>
    )
  }
}

function mapStateToProps({ recipes }) {

  // anything returned here will
  // end up as props on this container
  return ({ recipes })
}

// anything returned from this function will
// end up as props on this container
function mapDispatchtoProps(dispatch) {
  // whenever getRecipes is called, the result should
  // be passed to all of our reducers
  return bindActionCreators({ getRecipes }, dispatch)
}


// promote RecipeList from a component to a container class
// it needs to know about this new dispatch method, getRecipes
// Make it available as a prop of the container
export default connect(mapStateToProps, mapDispatchtoProps)(RecipeList)
