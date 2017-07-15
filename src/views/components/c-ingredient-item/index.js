import React, { Component } from 'react';
import classnames from 'classnames';
import styled from 'styled-components'
// local presentational components
import Button from '../button';
import Icon from '../icon';

import {ContainerQuery} from 'react-container-query';

const query = {
  'small': {
    minWidth: 0,
    maxWidth: 399
  },
  'medium': {
    minWidth: 400,
    maxWidth: 598
  },
  'large': {
    minWidth: 600
  }
};

const Row = styled.div`
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  width: 100%;
`
const ToggleButton = styled(Button)`
  background-color: white;
  border: 1px solid deepskyblue;
  border-radius: 3px;
`
const Action = styled(Icon)`
  color: deepskyblue;
  &.large {
    font-size: 1.5em;
  }
  &.medium {
    font-size: 1em;
  }
  &.small {
    font-size: 1em;
  }
`

export class IngredientItem extends Component {

  remove = () => {
    this.props.removeItem(this.props.item)
  }
  render() {
    const { title } = this.props
    return (
      <ContainerQuery query={query} initialSize={{width:100}}>
        {(params) => (
          <Row>
            <ToggleButton
              onClick={this.strike}>
              <Action name="done" className={classnames(params)} />
            </ToggleButton>
            <div>
              {title}
            </div>
            <ToggleButton
              onClick={this.remove}>
              <Action name="delete" className={classnames(params)} />
            </ToggleButton>
          </Row>
        )}
      </ContainerQuery>
    );
  }
}

export default IngredientItem;
