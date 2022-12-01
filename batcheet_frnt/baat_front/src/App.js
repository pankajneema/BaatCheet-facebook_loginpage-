// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
// import login from "myComponants/login";



const LoginForm = () => {
  
  
  return (
    <Form >
      
      <Form.Group class="mb-3 ">
        <div class="row">
          <div class="col-6">
          <Form.Control 
          type="text"
          placeholder="First name"
        /> 
          </div>
          <div class="col-6">
          <Form.Control
          type="text"
          placeholder="Last name"
        />
          </div>
        </div>
      </Form.Group>
      <Form.Group controlId="formBasicEmail" class="mb-3 ">
        <Form.Control
          type="email"
          placeholder="Mobile number or email address"
        />
      </Form.Group>
      
      <Form.Group controlId="formBasicPassword" class="mb-3 ">
        <Form.Control
          type="password"
          placeholder="New Password"
        />
      </Form.Group>

      <Form.Group class="mb-3 ">
        <span datatype="">Date fo Birth</span>
        <div class="row">
          <div class="col-4">
              <select class="form-control dob"  type="date"> <option>Date</option>
              </select>
          </div>

          <div class="col-4">
          <select class="form-control dob" >
          <option>Month</option>
          </select>
          </div>

          <div class="col-4">
          <select class="form-control dob" >
          <option>Year</option>
          </select>
          </div>

        </div>
      </Form.Group>



      <Form.Group class="mb-3">
        <span datatype="">Gender</span>
        <div class="row" id="gneder">
          <div class="col-4">
          <div class="form-check form-control" >
          <label class="form-check-label" for="exampleRadios1">
    Male
  </label>
  <input class="form-check-input ml-4" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked /> 
  </div>
          </div>

          <div class="col-4">
          <div class="form-check form-control" >
          <label class="form-check-label" for="exampleRadios2">
    Female
  </label>
  <input class="form-check-input ml-4" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
 
</div>

          </div>

          <div class="col-4">
          <div class="form-check form-control" >
          <label class="form-check-label" for="exampleRadios2">
    Custom
  </label>
  <input class="form-check-input ml-4" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
  
</div>
          </div>

        </div>
      </Form.Group>

        <Form.Group id='sign'>
        <Button class="btn btn-block" type="submit" block  id="signinbtn">
        Sign Up
         </Button>
        </Form.Group>
      

    </Form>
  );
};



function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
   

    
        <div>
           <div className="row" id="allp">
            <div className="col-2 " > </div>
            <div className="col-4" id="firstlogin">
              <div id="fst">
                <p id="name" >BaatCheet</p>
              </div>
              <h4 id="line">Baatcheet helps you connect and share with the people in your life.</h4>
            </div>
            <div className="col-4">
              <div id="login">
                <div className="card" id="logincard" >
                  <div className="card-body">
                    <input name="name" type="text" className="form-control mb-3 form-control-lg" placeholder='username' aria-describedby="emailHelp" ></input>
                    <input name="password" type="text" className="form-control mb-3 form-control-lg " placeholder='password'></input>
                    <button type="button" className="btn btn-primary btn-lg btn-block mb-1"><strong>Log in</strong></button>
                    <a href='forgate' id="forgate" className="justify-content-center mb-4">Forgotten password?</a>
                    <hr id="hr"></hr>
                    <div id="lgnbt">
                      <button type="submit" className="btn  form-control-lg" id="lgnbtn"  variant="primary" onClick={handleShow}><strong>Create New Account</strong></button>
                      <Modal show={show} onHide={handleClose} id="modal">
                        <Modal.Header closeButton >
                          <Modal.Title className="mb-0 px-0">
                            <h2>Sign Up</h2> 
                           <small>It's quick and easy.</small>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <LoginForm />
                        </Modal.Body>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
      
 

export default App;

