import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import plan1 from '../../assets/images/plan1.png'
import plan2 from '../../assets/images/plan2.png'
import plan3 from '../../assets/images/plan3.png'
import paymentDetailShape from '../../assets/images/payment-detail-shape.png'
import bulletPoint from '../../assets/images/bullet-point.png'


const Step2 = () => {

  const [show, setShow] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    setIsActive(current => !current);
    setShow((s) => !s);
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
                <Col>
                  <div className='plan-box text-center blue'>
                    <div className='plan-header text-white' style={{backgroundImage: `url(${plan1})`}}>

                    </div>
                    <div className='plan-body'>
                      <h2 className='mb-0 text-blue'>£7.<span>99</span></h2>
                      <h6 className='plan-type'>Monthly</h6>
                      <button className='btn text-blue'>Select</button>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className='plan-box text-center orange'>
                    <div className='plan-header text-white' style={{backgroundImage: `url(${plan2})`}}>
                      <h4 className='mb-0'>Save 20%</h4>
                    </div>
                    <div className='plan-body'>
                      <h2 className='mb-0 text-orange'>£76.<span>00</span></h2>
                      <h6 className='plan-type'>Yearly</h6>
                      <button type='button' onClick={handleClick} className={isActive ? 'btn text-orange bg-orange text-white' : 'btn text-orange'} >Select</button>
                    </div>
                  </div>
                </Col>     
                <Col>
                  <div className='plan-box text-center teal'>
                    <div className='plan-header text-white' style={{backgroundImage: `url(${plan3})`}}>
                      <h4 className='mb-0'>Save 10%</h4>
                    </div>
                    <div className='plan-body'>
                      <h2 className='mb-0 text-teal'>£43.<span>00</span></h2>
                      <h6 className='plan-type'>6 Month</h6>
                      <button className='btn text-teal'>Select</button>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row style={{ display: show ? "none" : "block" }}>
                <Col className='col-md-9 m-auto'>
                  <div onClick={handleDiscount} style={{ display: showDiscountBox ? "block" : "none" }} className='text-white text-center mt-3 mb-3 text-decoration-underline cursor-pointer'>
                    I have a Discount Code
                  </div>
                  <div className='discount-code-box' style={{ display: showDiscountBox ? "none" : "block" }}>
                    <Row>
                      <Col md={6} className="mx-auto mt-5 mb-4">
                      <div class="input-group">
                        <input type="text" class="form-control text-sm" placeholder="Discount Code" />
                        <button onClick={handleApplyedCode} class="btn text-white bg-orange text-sm" type="button">Verify</button>
                      </div>
                      <p style={{display: showApplyedCode ? "none" : "block", color: "#FFEA2F"}} className='mb-0 text-sm'>Discount Code Applyed!</p>
                      </Col> 
                    </Row>
                  </div>
                  <div className='discount-code-card d-flex justify-content-between'>
                    <div className='summary p-4'>
                      <h5 className='mb-3'>Summary</h5>
                      <p className='mb-1'><img src={bulletPoint} /> Yearly Subscription 14-Days free tiral</p>
                      <p className='mb-1'><img src={bulletPoint} /> Your first payment will be due on the [Insert Date].</p>
                    </div>
                    <div className='payment-detail' style={{backgroundImage: `url(${paymentDetailShape})`}}>
                      <h6 className='mb-3'>Payment Details</h6>
                      <div className='d-flex justify-content-between'>
                        <p className='mb-0'>Yearly</p>
                        <p className='mb-0'>£76.00</p>
                      </div>
                      <div className='d-flex justify-content-between total-pay mt-3 pt-2'>
                        <p className='mb-0'>Total Pay</p>
                        <p className='mb-0'>£76.00</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Form>
        </div>
    </>
  )
}

export default Step2