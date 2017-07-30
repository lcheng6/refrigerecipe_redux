import React, { Component } from 'react';
import classNames from 'classnames';
import Button from '../button';
import Icon from '../icon';
import { Card, CardImg, CardBlock, CardLink,
  CardTitle, CardSubtitle, Badge,
  Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

// import styled from 'styled-components'


// components can receive state and actions as props.

export class RecipeCardIntro extends Component {
  constructor(props) {
    super(...arguments);
    this.props = props;
  }

  render() {
    return (
      <Card>
        <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
        <CardBlock onClick={()=>{console.log('Show Recipe '+ this.props.recipeId); this.props.getRecipeDetail(this.props.recipeId);}}>
          <CardTitle>{this.props.title}</CardTitle>
          <CardSubtitle>Ingredients: </CardSubtitle>
          <br />
          <CardLink href="#">Used <Badge color="success">{this.props.usedCount}</Badge></CardLink>
          <CardLink href="#">Missing <Badge color="warning">{this.props.missedCount}</Badge></CardLink>
        </CardBlock>
      </Card>
    );
  }
}
//TODO: add a Button within Card to display modal.  for the time being use the button to print something to console.
//later use the button to trigger axios get.

//TODO: add a button to dispatch a getRecipeDetail
//map state to props -> pull off state.
//action take ID to axios to detail
//map dispatch to props ->
//modal create a route -> route to modal window, the modal window will get 1 recipe to display.
//in modal window, have a button to save the recipe.



export default RecipeCardIntro;
