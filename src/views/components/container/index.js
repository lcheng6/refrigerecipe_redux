import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

const Content = styled.div`
  min-height: calc(100vh - 60px);
  background-color: #EEEEEE;
  padding: 10px;
  &.flex{
    align-content: flex-start;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    &.vertical {
      flex-direction: column;
    }
  }
`

const FlexContainer = ({ className, children }) => {
  return (
    <Content className={className}>
      {children}
    </Content>
  )
}

export default FlexContainer
