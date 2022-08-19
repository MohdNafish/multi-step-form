import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../assets/images/logo.png'
import Link from 'react-bootstrap'

const Header = () => {
  return (
    <div className='header'>
      <Container>
        <Row className='align-items-center'>
            <Col>
                <img src={Logo} className="logo" />
            </Col>
            <Col className="d-flex justify-content-end">
                <a href="" className='nav-link'>Login</a>
                <a href="" className='nav-link px-2'>/</a>
                <a href="" className='nav-link'>Signup</a>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header
