import React, { useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import bannerImage from '../../assets/images/Banner.png'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../layout/Header'

const Signup = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    
  });

  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Step1 formData={formData} setFormData={setFormData} setNextPage={()=>setPage((currPage) => currPage + 1)} />;
    } else if (page === 1) {
      return <Step2 formData={formData} setFormData={setFormData} setNextPage={()=>setPage((currPage) => currPage + 1)} />;
    } else {
      return <Step3 formData={formData} setFormData={setFormData} setNextPage={()=>setPage((currPage) => currPage + 1)} />;
    }
  };

  

  return (
    <div className='form-body' style={{backgroundImage: `url('http://localhost:3000/static/media/Banner.0cc189ecb73f5b454cc1.png')`}}>
      <Header />
      <div className="form">
        <div className="step-sec">
          <div className="progressbar">
            <div
              style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
            >
            </div>
          </div>
          <div className="steps">
                <div>step 1</div>
                <div>step 2</div>
                <div>step 3</div>
          </div>
        </div>
        <Container fluid="md">
          <Row>
            <Col md={10} className="mx-auto">
              <div className="form-container">
                {/* <div className="header">
                  <h1>{FormTitles[page]}</h1>
                </div> */}
                <div className="body">{PageDisplay()}</div>
                <div className="footer">
                  <button
                    disabled={page == 0}
                    onClick={() => {
                      setPage((currPage) => currPage - 1);
                    }}
                  >
                    Prev
                  </button>
                  <button
                    onClick={() => {
                      if (page === FormTitles.length - 1) {
                        alert("FORM SUBMITTED");
                        console.log(formData);
                      } else {
                        setPage((currPage) => currPage + 1);
                      }
                    }}
                  >
                    {page === FormTitles.length - 1 ? "Submit" : "Next"}
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Signup
