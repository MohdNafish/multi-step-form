import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Step1 = () => {
  return (
    <>
        {/* <Row>
          <Col className='text-center'>
            <h3 className='text-white'>Set Up Your Account</h3>
            <p className='text-white'>Fill all form field to go next step</p>
          </Col>
        </Row> */}
        <div>
          <Form className='form-inner text-white'>
            <Row>
              <Col>
                <h4 className='mb-3'>About You</h4>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                  <Form.Control type="date" placeholder="Date of Birth" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Label className='d-block mb-0'>Gender</Form.Label>
                <label>
                  <Form.Check inline type="radio" aria-label="radio 1" name="gender" className='m-0' /> Male
                </label>
                <label>
                  <Form.Check inline type="radio" aria-label="radio 2" name="gender" className='m-0 ml-2' /> Female
                </label>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4 className='mb-3'>Security</h4>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Control type="text" placeholder="Email" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Control type="text" placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <label className='accept-policy-check'>
                  <input type='checkbox' /> I would like to receive News and promotions from easyGym and easyGroup.
                </label>
              </Col>
            </Row>
          </Form>
        </div>
    </>
  )
}

export default Step1
