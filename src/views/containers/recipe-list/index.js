import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// import _ from 'lodash'
import RecipeCardIntro from '../../components/recipe-card-intro'
import { getRecipes } from '../../../core/get-recipes'

//          // temporarily hard-coded
// getRecipes('apples%2Cflour%2Csugar')

class RecipeList extends Component {
  constructor(props) {
    super(props)
    // this.state = { recipes: [] }
  }
  // getRecipes is available on props cuz bindActionCreators
  // registers it and 'connect' it with react as props below
  componentDidMount() {
    // =====================  HARD CODED ==========================
    this.props.getRecipes('rice,eggs,tortillas,sausage')
    console.log('in componentDidMount: this.state = ' + this.state + ' this.props = ' + this.props)
  }

  renderRecipes() {
    console.log('in renderRecipes: this.state = ' + this.state + ' this.props = ' + this.props)
    return this.props.recipes.map((recipe) => {
      return (
        <RecipeCardIntro
          key={recipe.id}
          title={recipe.title}
          usedCount={recipe.usedIngredientCount}
          missedCount={recipe.missedIngredientCount}
          image={recipe.image}
         />
      )
    })
  }
  render() {
      console.log('in componentDidMount: this.state = ' + this.state + ' this.props = ' + this.props)
    return (
      <div>
        {this.renderRecipes()}
        {console.log("renderingRecipes ", this.renderRecipes())}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('in mapStateToProps state =', state)
  // anything returned here will
  // end up as props on this container
  return {
    recipes: state.reducers.intro_recipes.recipes
  }
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
