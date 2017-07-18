import React from 'react';
import { Card, CardImg, CardText, CardBlock, CardLink,
  CardTitle, CardSubtitle, Badge, Button } from 'reactstrap';
// import styled from 'styled-components'

const RecipeCardIntro = (props) => {
  return (
    <Card>
      <CardImg top width="100%" src="https://spoonacular.com/recipeImages/easy-no-knead-artisan-bread-866619.jpg" alt="Card image cap" />{props.image}
      <CardBlock>
        <CardTitle>{props.title}Cinnamon Chip Bread</CardTitle>
        <CardSubtitle>Ingredients: </CardSubtitle>
        <br />
        <CardLink href="#">Used <Badge color="success">{props.usedCount}2</Badge></CardLink>
        <CardLink href="#">Missing <Badge color="warning">{props.missedCount}4</Badge></CardLink>
      </CardBlock>
    </Card>
  );
};


export default RecipeCardIntro;

// title: "Cinnamon Chip Bread",
// image: "https://spoonacular.com/recipeImages/Cinnamon-Chip-Bread-525861.jpg",
// imageType: "jpg",
// usedIngredientCount: 2,
// missedIngredientCount: 1,
// likes: 3 },
