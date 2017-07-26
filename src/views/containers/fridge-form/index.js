import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import './fridge-form.css';

export class FridgeForm extends Component {

  constructor() {
    super(...arguments);
    this.state = {item: ''};
  }

  clearInput = () => {
    this.setState({item: ''});
  }

  handleChange = (event) => {
    this.setState({item: event.target.value});
  }

  handleKeyUp = (event) => {
    if (event.keyCode === 27) this.clearInput();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const item = this.state.item.trim();
    if (item.length) this.props.handleSubmit(item);
    this.clearInput();
  }

  render() {
    return (
      <form className="task-form" onSubmit={this.handleSubmit} noValidate>
        <input
          autoComplete="off"
          autoFocus
          className="task-form__input"
          maxLength="64"
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          placeholder="What's in your fridge?"
          type="text"
          value={this.state.item}
        />
      </form>
    );
  }
}


export default FridgeForm;
