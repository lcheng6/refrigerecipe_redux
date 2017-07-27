import React from 'react';
import { Card, CardImg, CardBlock, CardLink,
  CardTitle, CardSubtitle, Badge,
  Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';
// import styled from 'styled-components'


// components can receive state and actions as props.

const RecipeCardIntro = (props) => {
  return (
    <Card>
      <CardImg top width="100%" src={props.image} alt="Card image cap" />
      <CardBlock>
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle>Ingredients: </CardSubtitle>
        <br />
        <CardLink href="#">Used <Badge color="success">{props.usedCount}</Badge></CardLink>
        <CardLink href="#">Missing <Badge color="warning">{props.missedCount}</Badge></CardLink>
      </CardBlock>
    </Card>
  );
};

//TODO: add a button to dispatch a getRecipeDetail
//map state to props -> pull off state.
//action take ID to axios to detail
//map dispatch to props ->
//modal create a route -> route to modal window, the modal window will get 1 recipe to display.
//in modal window, have a button to save the recipe.
export default RecipeCardIntro;
