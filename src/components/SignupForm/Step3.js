import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap'
import { useFormik, Formik, Field, Form, useField, useFormikContext} from 'formik';
import { PaymentSchema } from '../../validators/Step3_PaymentSchema'

const Step3 = () => {

  const formik = useFormik({
    initialValues: {
      card_holder_name: "",
      card_number: "",
      cvv: "",
      expiry: "",
    },
    validationSchema: PaymentSchema,
    // onSubmit: setNextPage,
  });
  
  const setInputValue = useCallback(
    (key, value) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik]
  );


  return (
    <>
      {/* <Row>
          <Col className='text-center'>
            <h3 className='text-white'>Set Up Your Account</h3>
            <p className='text-white'>Fill all form field to go next step</p>
          </Col>
        </Row> */}
        <div>
          <Form onSubmit={formik.handleSubmit} className='form-inner text-white'>
            <Row>
              <Col>
                <h4 className='mb-3'>Secure Payment</h4>
              </Col>
            </Row>
            <Row>
              <Col md={9}>
                <div className='form-group'>
                  <input className='form-control'
                    placeholder="Card Number"
                    value={formik.values.card_number}
                    onChange={(e) => setInputValue("card_number", e.target.value)}
                  />
                  <small className='error'>{formik.errors.card_number}</small>
                </div>
              </Col>
              <Col md={3}>
                <div className='form-group'>
                  <input className='form-control'
                    placeholder="CVV"
                    value={formik.values.cvv}
                    onChange={(e) => setInputValue("cvv", e.target.value)}
                  />
                  <small className='error'>{formik.errors.cvv}</small>
                </div>
              </Col>
              <Col md={12}>
                <div className='form-group'>
                  <input className='form-control'
                    placeholder="Card Holder Name"
                    value={formik.values.card_holder_name}
                    onChange={(e) => setInputValue("card_holder_name", e.target.value)}
                  />
                  <small className='error'>{formik.errors.card_holder_name}</small>
                </div>
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
                <select class="form-select form-control"
                  value={formik.values.month}
                  onChange={(e) => setInputValue("month", e.target.value)} >
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
                <select class="form-select form-control" 
                  value={formik.values.year}
                  onChange={(e) => setInputValue("year", e.target.value)} >
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
            <div className='text-center mt-4'>
              <Button type="submit" className='next_btn'>Submit</Button>
            </div>
          </Form>
        </div>
    </>
  )
}

export default Step3