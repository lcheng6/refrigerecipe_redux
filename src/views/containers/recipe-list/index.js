import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RecipeCardIntro from '../../components/recipe-card-intro'
import { getRecipes } from '../../../core/get-recipes'

//          // temporarily hard-coded
// getRecipes('apples%2Cflour%2Csugar')

class RecipeList extends Component {
  constructor(props) {
    super(props)
    this.state = { list: {} }
  }
  // getRecipes is available on props cuz bindActionCreators
  // registers it and 'connect' it with react as props below
  componentWillMount() {
    this.props.getRecipes('flour,sugar,milk')
    console.log("this.state in componentWillMount in recipe-list", this.state.list)
  }

  renderList = () => {
    console.log("renderList inside recipe-list component ", this.state)
    return this.state.recipes.list.map((recipe) => {
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
        <RecipeCardIntro/>
        {this.renderList}
      </div>
    )
  }
}

function mapStateToProps({ list }) {
  // anything returned here will
  // end up as props on this container
  return { list }
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
