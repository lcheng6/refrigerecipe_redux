// import React from 'react'
import SingleCardResponsive from 'src/views/components/layout/single-column'
import { Card, Button, CardTitle, CardHeader, CardBlock, Form, FormGroup, Label, Input } from 'reactstrap';


import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authActions } from 'src/core/auth';



const SignInPage = ({signInWithGithub, signInWithGoogle, signInWithTwitter}) => {
  return (
    <SingleCardResponsive>
      <Card>
        <CardHeader className="text-center">Are You Hungry?</CardHeader>
        <CardBlock>
          <CardTitle className="text-center">Sign In</CardTitle>
          <Button onClick={signInWithGithub} block>GitHub</Button>
          <Button onClick={signInWithGoogle} block>Google</Button>
          <Button onClick={signInWithTwitter} block>Twitter</Button>
        </CardBlock>
      </Card>
    </SingleCardResponsive>
  );
};




//=====================================
//  CONNECT
//-------------------------------------

const mapDispatchToProps = {
  signInWithGithub: authActions.signInWithGithub,
  signInWithGoogle: authActions.signInWithGoogle,
  signInWithTwitter: authActions.signInWithTwitter
};

export default withRouter(
    connect(
    null,
    mapDispatchToProps
  )(SignInPage)
);
