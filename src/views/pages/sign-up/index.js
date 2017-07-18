import React from 'react'
import FullWidthResponsive from '../../components/layout/full-width'
import NavBar from '../../components/navbar'
import SignUpCard from '../../components/card-signup'


const SignIn = () => (
  <div>
    <NavBar/>
    <FullWidthResponsive>
      <SignUpCard/>
    </FullWidthResponsive>
  </div>
)

export default SignIn
