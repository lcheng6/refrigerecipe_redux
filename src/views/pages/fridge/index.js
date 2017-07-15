import React from 'react'
import { connect } from 'react-redux'
import { ingredientActions, getCurrentIngredients } from 'core/ingredients'
// import { Route } from 'react-router-dom'
// import styled from 'styled-components'

import Container from '../../components/container'
import IngredientList from '../../components/ingredient-list'

const Fridge = ({removeItem, items}) => {
  return (
    <Container className="flex vertical">
      <IngredientList
        removeItem={removeItem}
        items={items}
      />
    </Container>
  )
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = state => ({
  items: getCurrentIngredients(state)
})

const mapDispatchToProps = {
  removeItem: ingredientActions.removeItem,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fridge)
