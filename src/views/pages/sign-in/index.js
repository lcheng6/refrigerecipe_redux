import React from 'react'
import FullWidthResponsive from '../../components/layout/full-width'
import NavBar from '../../components/navbar'
import LoginCard from '../../components/card-login'


const SignIn = () => (
  <div>
    <NavBar/>
    <FullWidthResponsive>
      <LoginCard/>
    </FullWidthResponsive>
  </div>
)

export default SignIn
