import React, { Component } from 'react';
import classNames from 'classnames';
import Button from 'src/views/components/button';
import Icon from 'src/views/components/icon';

export class FridgeItem extends Component {
  constructor() {
    super(...arguments);
  }

  handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      this.save(event);
    }
    else if (event.keyCode === 27) {
      this.stopEditing();
    }
  }

  remove = () => {
    this.props.removeItem(this.props.item);
  }

  renderTitle = (item) => {
    return (
      <div className="task-item__title" tabIndex="0">
        {item.title}
      </div>
    );
  }

  renderTitleInput = (item) => {
    return (
      <input
        autoComplete="off"
        autoFocus
        className="task-item__input"
        defaultValue={item.title}
        maxLength="64"
        onKeyUp={this.handleKeyUp}
        type="text"
      />
    );
  }

  render () {
      const { item } = this.props;

      let containerClasses = classNames('task-item', {
        'task-item--completed': item.completed,
      });

      return (
        <div className={containerClasses} tabIndex="0" style={{display: "flex", marginBottom: "15px"}}>
          {/* <div className="cell">
            <Button
              className={classNames('btn--icon', 'task-item__button', {'active': item.completed})}
              onClick={this.toggleStatus}>
              <Icon name="done" />
            </Button>
          </div> */}

          <div className="cell" style={{fontSize: "20px"}}>
            {this.renderTitle(item)}
          </div>

          <div className="cell" style={{marginLeft: "auto"}}>
            <Button
              className={classNames('btn--icon', 'task-item__button')}
              onClick={this.remove}>
              <Icon name="delete" />
            </Button>
          </div>
        </div>
      );
    }
  }



export default FridgeItem;
