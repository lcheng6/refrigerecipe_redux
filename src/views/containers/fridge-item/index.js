import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
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
    this.props.removeTask(this.props.task);
  }

  renderTitle(task) {
    return (
      <div className="task-item__title" tabIndex="0">
        {task.title}
      </div>
    );
  }

  renderTitleInput(task) {
    return (
      <input
        autoComplete="off"
        autoFocus
        className="task-item__input"
        defaultValue={task.title}
        maxLength="64"
        onKeyUp={this.handleKeyUp}
        type="text"
      />
    );
  }

  render() {
    const { task } = this.props

    let containerClasses = classNames('task-item', {
      'task-item--completed': task.completed,
    })

    return (
      <div className={containerClasses} tabIndex="0">
        <div className="cell">
          {this.renderTitle(task)}
        </div>
        <div>
          <Button
            className={classNames('btn--icon', 'task-item__button')}
            onClick={this.remove}>
            <i className={classNames('material-icons')}>delete</i>
          </Button>
        </div>
      </div>
    );
  }
}



export default FridgeItem;
