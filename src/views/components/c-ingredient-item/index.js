import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styled from 'styled-components'
// local presentational components
import Button from '../button';
import Icon from '../icon';

const Row = styled.div`
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`
const ToggleButton = styled(Button)`
  background-color: white;
  border: 1px solid deepskyblue;
  border-radius: 3px;
`

const Action = styled(Icon)`
  color: deepskyblue;
  font-size: 1em;
`

export class IngredientItem extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <Row>
        <ToggleButton>
          <Action name="done" />
        </ToggleButton>
        <ToggleButton>
          <Action name="delete" />
        </ToggleButton>
      </Row>
    );
  }
}

export default IngredientItem;
