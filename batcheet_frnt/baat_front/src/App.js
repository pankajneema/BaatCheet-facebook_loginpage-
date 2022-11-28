// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import login from "myComponants/login";



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
      
      <login/>

    </div>
      );

    }
 

export default App;

