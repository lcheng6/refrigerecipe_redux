import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

const Content = styled.div`
  min-height: calc(100vh - 60px);
  background-color: #EEEEEE;
  padding: 10px;
  &.flex{
    align-content: flex-start;
    display: flex;
    flex-wrap: wrap;
    &.vertical {
      flex-direction: column;
    }
  }
`

const Container = ({ className, children }) => {
  return (
    <Content className={className}>
      {children}
    </Content>
  )
}

export default Container
