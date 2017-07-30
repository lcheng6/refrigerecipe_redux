import React, { Component } from 'react';
import classNames from 'classnames';
import { Card, CardImg, CardBlock, CardLink,
  CardTitle, CardSubtitle, Badge} from 'reactstrap';

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


export default RecipeCardIntro;
