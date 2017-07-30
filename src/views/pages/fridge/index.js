import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { List } from 'immutable';
import { fridgeActions, getVisibleItems } from 'src/core/fridge';
import FridgeForm from 'src/views/containers/fridge-form';
import FridgeList from 'src/views/containers/fridge-list';

import SingleCardResponsive from '../../components/layout/single-column'

const Fridge = ({createItem, location, removeItem, items, updateItem}) => {
  const params = new URLSearchParams(location.search);
  const filter = params.get('filter')
  return (
    <SingleCardResponsive>
      <FridgeForm handleSubmit={createItem} />
      <FridgeList
        filter={filter}
        updateItem={updateItem}
        removeItem={removeItem}
        items={items}
      />
    </SingleCardResponsive>
  )
}

Fridge.PropTypes = {
  items: PropTypes.instanceOf(List),
}
const mapStateToProps = state => ({
  // items: state.fridge.items
  items: getVisibleItems(state)
})

const mapDispatchToProps = {
  createItem: fridgeActions.createItem,
  removeItem: fridgeActions.removeItem,
  filterItems: fridgeActions.filterItems,
  updateItem: fridgeActions.updateItem
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Fridge)
)
