import React from 'react'
import SingleCardResponsive from '../../components/layout/single-column'
import NavBar from '../../components/navbar'
import SignUpCard from '../../containers/card-sign-up'


const SignIn = () => (
  <div>
    <NavBar/>
    <SingleCardResponsive>
      <SignUpCard/>
    </SingleCardResponsive>
  </div>
)

export default SignIn
