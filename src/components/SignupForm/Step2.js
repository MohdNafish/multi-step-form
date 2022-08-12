import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import plan1 from '../../assets/images/plan1.png'
import plan2 from '../../assets/images/plan2.png'
import plan3 from '../../assets/images/plan3.png'

const Step2 = () => {
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
            <div className='plan-sec text-center'>
              <Row>
                <Col>
                  <div className='plan-box blue'>
                    <div className='plan-header text-white' style={{backgroundImage: `url(${plan1})`}}>

                    </div>
                    <div className='plan-body'>
                      <h2 className='mb-0'>£7.<span>99</span></h2>
                      <h6 className='plan-type'>Monthly</h6>
                      <button className='btn btn1'>Select</button>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className='plan-box orange'>
                    <div className='plan-header text-white' style={{backgroundImage: `url(${plan2})`}}>
                      <h4 className='mb-0'>Save 20%</h4>
                    </div>
                    <div className='plan-body'>
                      <h2 className='mb-0'>£76.<span>00</span></h2>
                      <h6 className='plan-type'>Yearly</h6>
                      <button className='btn btn1'>Select</button>
                    </div>
                  </div>
                </Col>     
                <Col>
                  <div className='plan-box teal'>
                    <div className='plan-header text-white' style={{backgroundImage: `url(${plan3})`}}>
                      <h4 className='mb-0'>Save 10%</h4>
                    </div>
                    <div className='plan-body'>
                      <h2 className='mb-0'>£43.<span>00</span></h2>
                      <h6 className='plan-type'>6 Month</h6>
                      <button className='btn btn1'>Select</button>
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