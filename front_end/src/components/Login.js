import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [inuser, setInuser] = useState({
    email: "", password: ""
  })
  let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setInuser({ ...inuser, [name]: value })
  }
  const loginData = async (event) => {
    event.preventDefault();
    const { email, password } = inuser;
    console.log(`email ${email} & password ${password}`);
    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: inuser.email, password: inuser.password })
    }).then((response) => {
      console.log(response.status);
      if (response.status === 422) {
        window.alert("Invalid Password");
        console.log("Invalid Password");
      } else if (response.status === 201) {
        window.alert("User Login Successful");
        console.log("User Login Successful");
        navigate('/about');
      } else if (response.status === 204) {
        window.alert("Fields Cannot be left empty");
        console.log("Fields Cannot be left empty");
      } else if (response.status === 404) {
        window.alert("Invalid Email");
        console.log("Invalid Email");
      } else {
        window.alert("new error");
        console.log("nre erro");
      }
    });



  };
  return (
    <div>
      <div>
        <section className='signup'>
          <div className='container mt-5 border border-4 border-dark'>
            <div className='ms-3 content'>
              <h1 className='p-3 mb-3'>Sign In</h1>
              <form method='POST'>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">Email</label>
                  <input type="email" className="form-control" name='email' placeholder='Enter your email' autoComplete='off' value={inuser.email} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">Password</label>
                  <input type="password" className="form-control" name='password' placeholder='Enter Password' autoComplete='off' value={inuser.password} onChange={handleChange} />
                </div>
                <div className="col-12 mt-3 mb-3">
                  <input type="submit" className="btn btn-primary" value="Login" onClick={loginData} />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Login;