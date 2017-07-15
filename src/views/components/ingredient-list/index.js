import React from 'react';
import IngredientItem from '../c-ingredient-item';
import styled from 'styled-components'
import FlexContainer from '../container'

const Container = styled(FlexContainer)`
  width: 100%;
  @media (min-width: 600px) {
    width: 600px;
  }
`

const IngredientList = ({removeItem, items, toggleItem}) => {
  let ingredientItems = items.map((item, index) => {
    return (
      <IngredientItem
        removeItem={removeItem}
        key={index}
        item={item}
        toggleItem={toggleItem}
      />
    );
  });

  return (
    <Container>
      {ingredientItems}
    </Container>
  );
};

export default IngredientList;
