import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useFormik, Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { AboutSchema } from '../../validators/Step1_AboutSchema'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Step1 = ({setNextPage}) => {

  // const handleOnSubmit = (values) => {
    // const fullName = Object.keys(values)
    //   .map((key) => values[key])
    //   .join(" ");
    // alert(`Hello ${fullName}!`);

    // handleNext()
  // };
  const max = new Date();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dob: max,
      gender: "",
      email: "",
      password: "",
    },
    validationSchema: AboutSchema,
    onSubmit: setNextPage,
  });

  const setInputValue = useCallback(
    (key, value) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik]
  );
  
  const [startDate, setStartDate] = useState();

  return (
    <>
        {/* <Row>
          <Col className='text-center'>
            <h3 className='text-white'>Set Up Your Account</h3>
            <p className='text-white'>Fill all form field to go next step</p>
          </Col>
        </Row> */}
        <div className='form-inner text-white'>
        <Row>
          <Col>
            <h4 className='mb-3'>About You</h4>
          </Col>
        </Row>
        <form onSubmit={formik.handleSubmit}>
          <Row>
            <Col md={6}>
              <div className='form-group'>
                <input className='form-control'
                  placeholder="First Name"
                  value={formik.values.firstName}
                  onChange={(e) => setInputValue("firstName", e.target.value)}
                />
                <small className='error'>{formik.errors.firstName}</small>
              </div>
            </Col>
            <Col md={6}>
              <div className='form-group'>
                <input className='form-control'
                  placeholder="Last Name"
                  value={formik.values.lastName}
                  onChange={(e) => setInputValue("lastName", e.target.value)}
                />
                <small className='error'>{formik.errors.lastName}</small>
              </div>
            </Col>
            <Col md={6}>
              <div className='form-group'>
                {/* <input className='form-control'
                  type="date"
                  placeholder="Date of Birth"
                  value={formik.values.lastName}
                  onChange={(e) => setInputValue("Date of Birth", e.target.value)}
                /> */}
                <DatePicker className='form-control' placeholderText='Date of Birth' value={formik.errors.dob} selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                <small className='error'>{formik.errors.dob}</small>
              </div>
            </Col>
            <Col md={6}>
              <div className='form-group'>
                <label>Gender</label><br/>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={(e) => setInputValue("gender", e.target.value)}
                  /> Male
                </label>
                <label className='mx-4'>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) => setInputValue("gender", e.target.value)}
                  /> Female
                </label>
                <small className='error'>{formik.errors.dob}</small>
              </div>
            </Col>
            <Col md={12}>
              <h4 className='mb-3'>Security</h4>
            </Col>
            <Col md={6}>
              <div className='form-group'>
                <input className='form-control'
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={(e) => setInputValue("email", e.target.value)}
                />
                <small className='error'>{formik.errors.email}</small>
              </div>
            </Col>
            <Col md={6}>
              <div className='form-group'>
                <input className='form-control'
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={(e) => setInputValue("password", e.target.value)}
                />
                <small className='error'>{formik.errors.password}</small>
              </div>
            </Col>
            <Col md={12}>
              <label className='accept-policy-check'>
                <input type='checkbox' /> I would like to receive News and promotions from easyGym and easyGroup.
              </label>
            </Col>
          </Row>
          <div className='text-center mt-4'>
            <Button type="submit" className='next_btn'>Next</Button>
          </div>
        </form>
        </div>
    </>
  )
}

export default Step1
