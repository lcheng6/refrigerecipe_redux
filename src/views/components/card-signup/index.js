import React from 'react';
import { Card, Button, CardTitle, CardHeader, CardBlock, Form, FormGroup, Label, Input } from 'reactstrap';

const SignUpCard = (props) => {
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
  );
};

export default SignUpCard;
