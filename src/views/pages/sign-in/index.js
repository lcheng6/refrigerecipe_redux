import React from 'react';
import { connect } from 'react-redux';
import { authActions } from 'core/auth';
import Button from 'views/components/button';


const SignInPage = ({signInWithGithub, signInWithGoogle, signInWithTwitter}) => {
  return (
    <div className="g-row sign-in">
      <div className="g-col">
        <h1 className="sign-in__heading">Sign in</h1>
        <Button onClick={signInWithGithub}>GitHub</Button>
        <Button onClick={signInWithGoogle}>Google</Button>
        <Button onClick={signInWithTwitter}>Twitter</Button>
      </div>
    </div>
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

export default connect(
  null,
  mapDispatchToProps
)(SignInPage);
