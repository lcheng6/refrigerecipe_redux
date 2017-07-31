import React, { Component } from 'react';
import classNames from 'classnames';
import { Card, CardImg, CardBlock, CardLink,
  CardTitle, CardSubtitle, Badge} from 'reactstrap';

// import styled from 'styled-components'


// components can receive state and actions as props.

export class SavedRecipeCard extends Component {
  constructor(props) {
    super(...arguments);
    this.props = props;
  }

  render() {
    const { recipe } = this.props;
    return (
      <Card>
        <CardImg top width="100%" src={recipe.image} alt="Card image cap" />
        <CardBlock>
          <CardTitle>{recipe.title}</CardTitle>
          <CardSubtitle>Ingredients: </CardSubtitle>
          <br />
          <CardLink href="#">Used <Badge color="success">3</Badge></CardLink>
          <CardLink href="#">Missing <Badge color="warning">2</Badge></CardLink>
        </CardBlock>
      </Card>
    );
  }
}


export default SavedRecipeCard;