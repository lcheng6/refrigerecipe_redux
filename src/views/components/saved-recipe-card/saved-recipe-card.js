import React, { Component } from 'react';
import classNames from 'classnames';
import { Card, CardImg, CardBlock, CardLink,
  CardTitle, CardSubtitle, Button} from 'reactstrap';

// import styled from 'styled-components'


// components can receive state and actions as props.

export class SavedRecipeCard extends Component {
  constructor(props) {
    super(...arguments);
    this.props = props;
  }

  render() {
    const { recipe } = this.props;
    const ingredientList = recipe.extendedIngredients.map((ingredient, index) =>
      <div className="item" key={index}>{ingredient.originalString}</div>
    );
    return (
      <Card>
        <CardImg top width="100%" src={recipe.image} alt="Card image cap" />
        <CardBlock onClick={()=>{console.log('Show Recipe '+ recipe.id);
          this.props.getRecipeDetail(recipe.id);
          this.props.recipeDetailCardShowModal(true);}}>
          <CardTitle>{recipe.title}</CardTitle>
          <CardSubtitle>Ingredients: </CardSubtitle>
          {ingredientList}
          <br />
        </CardBlock>
        <div className="extra content">
          <Button className="mini ui button add-to-cart-button">
              <i className="add to cart icon"/>
            Add to Cart
          </Button>
          <span className="right floated">
              <Button className="mini ui button">
                <i className="external square icon blue"/>
                <a href={recipe.sourceUrl}
                   target="_blank" className="recipe-external-link">Link to Source</a>
              </Button>
            </span>
        </div>
      </Card>
    );
  }
}


export default SavedRecipeCard;