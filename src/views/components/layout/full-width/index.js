import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import classNames from 'classnames'
// import styled from 'styled-components'

const FullWidthResponsive = ({children, className}) => (
  <Container fluid>
    <Row noGutters>
      <Col
        sm="12"
        md={{ size: 10, offset: 1 }}
        lg={{ size: 8, offset: 2 }}
        >
          {children}
        </Col>
    </Row>
  </Container>
)

export default FullWidthResponsive
