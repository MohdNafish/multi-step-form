import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import {Row, Col, Button} from 'react-bootstrap';
import paymentDetailShape from '../../assets/images/payment-detail-shape.png'
import bulletPoint from '../../assets/images/bullet-point.png'
import SelectedPlanDetails from './SelectedPlanDetails';

const Step2 = () => {

  const [showPlanDetail, setShowPlanDetail] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [buttonText, setButtonText] = useState('Select');
  const [id, setId] = useState(true);
  const [freeTrial, setFreeTrial] = useState(true);
  const [firstPayment, setFirstPayment] = useState(true);
  const [planPrice, setPlanPrice] = useState(true);
  const [planType, setPlanType] = useState(true);
  // const [selectPlan, setSelectPlan] = useState("Select");

  const handleClick = (id,freeTrial,firstPayment,planPrice,planType,selectPlan) => {
    // console.log(id)
    // console.log(freeTrial)
    // console.log(planPrice)

    setId(id)
    setFreeTrial(freeTrial)
    setFirstPayment(firstPayment)
    setPlanPrice(planPrice)
    setPlanType(planType)
    // setSelectPlan(selectPlan)

    setIsActive(current => !current);
    setShowPlanDetail(false);
    setButtonText('Selected');
   };

  const [showDiscountBox, setShowDiscountBox] = useState(true);
  const handleDiscount = e => {
    setShowDiscountBox((s) => !s);
  }

  const [showApplyedCode, setShowApplyedCode] = useState(true);
  const handleApplyedCode = e => {
    setShowApplyedCode((s) => !s);
  }

  return (
    <>
      {/* <Row>
          <Col className='text-center'>
            <h3 className='text-white'>Set Up Your Account</h3>
            <p className='text-white'>Fill all form field to go next step</p>
          </Col>
        </Row> */}
        <div>
          <Form className='form-inner'>
            <div className='plan-sec'>
              <Row>
              {SelectedPlanDetails && SelectedPlanDetails.length ? (
              <>
                {SelectedPlanDetails.map((planDetails, index) => (
                  <Col md={4}>
                    <div className='plan-box text-center blue'>
                      <div className='plan-header text-white' style={{backgroundImage: `url(${planDetails.planImage})`}}>
                        <h4 className='mb-0'>{planDetails.save}</h4>
                      </div>
                      <div className='plan-body'>
                        <h2 className={`mb-0 ${planDetails.planTextColor}`}>{planDetails.planPrice}</h2>
                        <h6 className='plan-type'>{planDetails.planType}</h6>
                        <button type='button' onClick={() => handleClick(planDetails.id, planDetails.freeTrial, planDetails.firstPayment, planDetails.planPrice,planDetails.planType,planDetails.selectPlan) } 
                        className={isActive ? 'btn text-blue bg-blue text-white' : 'btn text-blue'}>{id == index + 1 ? buttonText : 'Select'}</button>
                      </div>
                    </div>
                  </Col>
                  ))}
                </>
              ) : null}
              </Row>
              <Row style={{ display: showPlanDetail ? "none" : "block" }}>
                {/* { SelectedPlanDetails && SelectedPlanDetails.length ? (
                  <>
                    {SelectedPlanDetails.map((planDetails, index) => ( */}
                      <Col className='col-md-9 m-auto'>
                        <div onClick={handleDiscount} style={{ display: showDiscountBox ? "block" : "none" }} className='text-white text-center mt-3 mb-3 text-decoration-underline cursor-pointer'>
                          I have a Discount Code
                        </div>
                        
                        <div className='discount-code-box' style={{ display: showDiscountBox ? "none" : "block" }}>
                          <Row>
                            <Col md={6} className="mx-auto mt-5 mb-4">
                            <div className="input-group">
                              <input type="text" className="form-control text-sm" placeholder="Discount Code" />
                              <button onClick={handleApplyedCode} className="btn text-white bg-orange text-sm" type="button">Verify</button>
                            </div>
                            <p style={{display: showApplyedCode ? "none" : "block", color: "#FFEA2F"}} className='mb-0 text-sm'>Discount Code Applyed!</p>
                            </Col> 
                          </Row>
                        </div>
                        <div className='discount-code-card d-flex justify-content-between'>
                          <div className='summary p-4'>
                            <h5 className='mb-3'>Summary</h5>
                            <p className='mb-1'><img src={bulletPoint} /> {freeTrial} </p>
                            <p className='mb-1'><img src={bulletPoint} /> {firstPayment} </p>
                          </div>
                          <div className='payment-detail' style={{backgroundImage: `url(${paymentDetailShape})`}}>
                            <h6 className='mb-3'>Payment Details</h6>
                            <div className='d-flex justify-content-between'>
                              <p className='mb-0'>{planType}</p>
                              <p className='mb-0'>{planPrice}</p>
                            </div>
                            <div className='d-flex justify-content-between total-pay mt-3 pt-2'>
                              <p className='mb-0'>Total Pay</p>
                              <p className='mb-0'>{planPrice}</p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    {/* ))}
                  </>
                ) : null } */}
              </Row>
            </div>
            <div className='text-center mt-4'>
              <Button type="submit" className='next_btn' >Next</Button>
            </div>
          </Form>
        </div>
    </>
  )
}

export default Step2