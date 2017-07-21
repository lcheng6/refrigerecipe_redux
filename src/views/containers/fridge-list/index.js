import React from 'react';
import FridgeItem from '../fridge-item';

const FridgeList = ({removeItem, items}) => {
  let fridgeItems = items.map((item, index) => {
    return (
      <FridgeItem
        removeItem={removeItem}
        key={index}
        item={item}
      />
    );
  });

  return (
    <div>
      {fridgeItems}
    </div>
  );
};

export default FridgeList;
