import React from 'react'
import styled from 'styled-components'


const Content = styled.div`
  min-height: calc(100vh - 60px);
  background-color: #EEEEEE;
`

const Container = ({children}) => {
  return (
    <Content>
      {children}
    </Content>
  )
}

export default Container
