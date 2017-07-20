import React, { Component } from 'react';
import { Card, Button, CardTitle, CardHeader, CardBlock, Form, FormGroup, Label, Input } from 'reactstrap';
import signUp from '../../../core/sign-up'

export default class SignUpCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Card>
          <CardHeader>Sign Up</CardHeader>
          <CardBlock>
            <CardTitle className="text-center">Are You Hungry?</CardTitle>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="userEmail" placeholder="john@example.com" />
              </FormGroup>
              <FormGroup>
                <Label for="phoneNumber">Phone Number</Label>
                <Input type="phone" name="phone" id="userPhone" placeholder="Text yourself your grociery lists" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="enter your password" />
              </FormGroup>
            </Form>
            <Button color="primary" block>Let's Get Cookin'</Button>
          </CardBlock>
        </Card>
      </div>
    )
  }
}

// anything returned from this function will
// end up as props on this container
// function mapDispatchtoProps(dispatch) {
  // whenever getRecipes is called, the result should
  // be passed to our reducers
//   return bindActionCreators({ getRecipes }, dispatch)
// }
