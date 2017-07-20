import React, { Component } from 'react'
import { InputGroup, InputGroupButton, Input, Button } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'
class FridgeForm extends Component {
  constructor(props){
    super(props)
    const { handleSubmit, onSubmit } = props
  }

  renderItemField = (field) => {
    return (
    <InputGroup>
      <Input
        type="text"
        onChange={field.input.onChange}
        onFocus={field.input.onFocus}
        onBlur={field.input.onBlur}
      />
      <InputGroupButton>
        <Button
          onClick={this.props.handleSubmit}>I'm a button</Button>
      </InputGroupButton>
    </InputGroup>
    )
  }

  render(props) {
    return (
      <form>
        <Field
          name="item"
          component={this.renderItemField}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'AddItemForm',
  onSubmit: submit
})(FridgeForm)
