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
          <Form className='form-inner text-white'>
            <Row>
              <Col>
                <div className='plan-box'>
                  <div className='plan-header' style={{backgroundImage: `url(${plan1})`}}>

                  </div>
                  <div className='plan-body'>
                    <h2 className='mb-0'>£7.<span>99</span></h2>
                    <h6 className='plan-type'>Monthly</h6>
                    <button className='btn btn1'>Select</button>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='plan-box'>
                  <div className='plan-header' style={{backgroundImage: `url(${plan2})`}}>
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
                <div className='plan-box'>
                  <div className='plan-header' style={{backgroundImage: `url(${plan3})`}}>
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
          </Form>
        </div>
    </>
  )
}

export default Step2