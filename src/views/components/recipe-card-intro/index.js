import React from 'react';
import { Card, CardImg, CardText, CardBlock, CardLink,
  CardTitle, CardSubtitle, Badge, Button } from 'reactstrap';
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

export default RecipeCardIntro;
