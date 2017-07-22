import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import classNames from 'classnames'
// import styled from 'styled-components'

const FullWidthResponsive = ({children, className}) => (
  <Container fluid>
    <Row noGutters>
      <Col
        sm="12"
        md="12"
        lg={{ size: 10, offset: 1 }}
        >
          {children}
        </Col>
    </Row>
  </Container>
)

export default FullWidthResponsive
