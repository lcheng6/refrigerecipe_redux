import React from 'react'
import SingleCardResponsive from '../../components/layout/single-column'
import NavBar from '../../components/navbar'
import SignInCard from '../../containers/card-sign-in'


const SignIn = () => (
  <div>
    <NavBar/>
    <SingleCardResponsive>
      <SignInCard/>
    </SingleCardResponsive>
  </div>
)

export default SignIn
