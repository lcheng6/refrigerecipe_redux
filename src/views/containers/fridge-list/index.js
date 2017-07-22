import React from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import FridgeItem from '../fridge-item';

const FridgeList = ({removeItem, items, updateItem}) => {
  let fridgeItems = items.map((item, index) => {
    return (
      <FridgeItem
        removeItem={removeItem}
        key={index}
        item={item}
        updateItem={updateItem}
      />
    )
  })

  return (
    <div>
      {fridgeItems}
    </div>
  )
}

FridgeList.propTypes = {
  removeItem: PropTypes.func.isRequired,
  items: PropTypes.instanceOf(List),
  updateItem: PropTypes.func.isRequired
};

export default FridgeList;
