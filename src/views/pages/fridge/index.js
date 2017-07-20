import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fridgeActions } from '../../../core/fridge';
import FridgeForm from '../../containers/fridge-form';
import FridgeList from '../../containers/fridge-list';

import SingleCardResponsive from '../../components/layout/single-column'

class Fridge extends Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <SingleCardResponsive>
        <FridgeForm handleSubmit={this.props.createItem} />
        <FridgeList
          removeItem={this.props.removeItem}
          items={this.props.items}
        />
      </SingleCardResponsive>
    )
  }
}

function mapStateToProps (state) {
  return{
    items: state.reducers.fridge.items
  }
}

const mapDispatchToProps = {
  createItem: fridgeActions.fridgeUpdate,
  // removeItem: fridgeActions.fridgeUpdate,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fridge)
