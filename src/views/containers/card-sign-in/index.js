import React from 'react';
import { Card, Button, CardTitle, CardHeader, CardBlock, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginCard = (props) => {
  return (
    <div>
      <Card>
        <CardHeader>Sign In</CardHeader>
        <CardBlock>
          <CardTitle className="text-center">Are You Hungry?</CardTitle>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="userEmail" placeholder="john@example.com" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="enter your password" />
            </FormGroup>
          </Form>
          <Button color="primary" block>Sign In</Button>
        </CardBlock>
      </Card>
    </div>
  );
};

export default LoginCard;
