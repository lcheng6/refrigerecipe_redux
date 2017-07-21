import React, { Component } from 'react';
import classNames from 'classnames';
import { Button } from 'reactstrap';


export class FridgeItem extends Component {
  constructor() {
    super(...arguments);
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.save(event);
    }
    else if (event.keyCode === 27) {
      this.stopEditing();
    }
  }

  remove() {
    this.props.removeTask(this.props.item);
  }

  renderTitle(item) {
    return (
      <div className="item-item__title" tabIndex="0">
        {item.title}
      </div>
    );
  }

  renderTitleInput(item) {
    return (
      <input
        autoComplete="off"
        autoFocus
        className="item-item__input"
        defaultValue={item.title}
        maxLength="64"
        onKeyUp={this.handleKeyUp}
        type="text"
      />
    );
  }

  render() {
    const { item } = this.props

    let containerClasses = classNames('item-item', {
      'item-item--completed': item.completed,
    })

    return (
      <div className={containerClasses} tabIndex="0">
        <div className="cell">
          {this.renderTitle(item)}
        </div>
        <div>
          <Button
            className={classNames('btn--icon', 'item-item__button')}
            onClick={this.remove}>
            <i className={classNames('material-icons')}>delete</i>
          </Button>
        </div>
      </div>
    );
  }
}



export default FridgeItem;
