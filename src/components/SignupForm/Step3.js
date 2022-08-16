import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Step3 = () => {
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
                <h4 className='mb-3'>Secure Payment</h4>
              </Col>
            </Row>
            <Row>
              <Col md={9}>
                <Form.Group className="mb-4">
                  <Form.Control type="text" placeholder="Card Number" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-4">
                  <Form.Control type="text" placeholder="CVV" />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-4">
                  <Form.Control type="text" placeholder="Card Holder Name" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h4 className='mb-3'>Expiry Date</h4>
              </Col>
              <Col md={4}>
              <Form.Control type="number" placeholder="Day" min="1" max="31" />
              </Col>
              <Col md={4}>
                <select class="form-select form-control">
                  <option>Month</option>
                  <option value="January">January</option>
                  <option value="Fabruary">Fabruary</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </Col>
              <Col md={4}>
                <select class="form-select form-control">
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
              </Col>
            </Row>
            <Row>
              <Col>
                <label className='accept-policy-check mt-4'>
                  <input type='checkbox' /> By Subscribing to classes you agree to easyGym classes’ Terms of use and you confirm that you have  read easyGym Classes’ Privacy Policy.
                </label>
              </Col>
            </Row>
          </Form>
        </div>
    </>
  )
}

export default Step3