import React, { Component } from 'react';
import classNames from 'classnames';
import { Card, CardImg, CardBlock, CardLink,
  CardTitle, CardSubtitle, Badge, CardText, Button} from 'reactstrap';

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
        </CardBlock>
        <div className="extra content">
          <button className="mini ui button add-to-cart-button">Add to Cart</button>
          <span className="right floated">
              <button className="mini ui button">
                <i className="external square icon blue"/>
                <a href="http://www.afamilyfeast.com/hungryforfootball-touchdown-mini-meatloaf-and-buffalo-chicken-bites-ad/"
                   target="_blank" className="recipe-external-link">Link to Recipe</a>
              </button>
            </span>
        </div>
      </Card>
    );
  }
}


export default SavedRecipeCard;