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

  edit = () => {
    this.setState({editing: true});
  }

  remove = () => {
    this.props.removeItem(this.props.item);
  }

  save = (event) => {
    if (this.state.editing) {
      const { item } = this.props;
      const title = event.target.value.trim();

      if (title.length && title !== item.title) {
        this.props.updateItem(item, {title});
      }

      this.stopEditing();
    }
  }
  toggleStatus = () => {
    const { item } = this.props;
    this.props.updateItem(item, {completed: !item.completed});
  }
  renderTitle = (item) => {
    return (
      <div tabIndex="0">
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

          <div className="cell" style={{marginLeft: "auto", cursor: "pointer"}}>
            <Button
              onClick={this.remove}>
              <Icon name="delete" />
            </Button>
          </div>
        </div>
      );
    }
  }



export default FridgeItem;
