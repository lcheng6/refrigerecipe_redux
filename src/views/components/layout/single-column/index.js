import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import classNames from 'classnames'
// import styled from 'styled-components'

const SingleCardResponsive = ({children, className}) => (
  <Container fluid>
    <Row noGutters>
      <Col
        sm="12"
        md={{ size: 6, offset: 3 }}
        lg={{ size: 4, offset: 4 }}
        >
          {children}
        </Col>
    </Row>
  </Container>
)

export default SingleCardResponsive
