import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fridgeActions } from 'src/core/fridge';
import FridgeForm from 'src/views/containers/fridge-form';
import FridgeList from 'src/views/containers/fridge-list';

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
    items: state.fridge.items
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
