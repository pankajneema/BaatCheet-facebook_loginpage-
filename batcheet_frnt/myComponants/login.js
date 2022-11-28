import React from 'react'

export default function login() {
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
