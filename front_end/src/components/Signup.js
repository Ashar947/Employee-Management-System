import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name:"", email:"", password:"", phone:"", work:"" 
  })
  let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value })
  }

  const registerData = async (event) => {
    event.preventDefault() ;
    const { name, email,phone,work,password } = user;
    console.log(`Name is ${name} , email ${email} phone ${phone} work ${work} pasword ${password}`);
    const res = await fetch('/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name:user.name,email:user.email,phone:user.phone,work:user.work,password:user.password})
    }).then((response)=>{
      console.log(response.status);
      if(response.status===422){
        window.alert("User already Registered with this email please use a new one");
        console.log("Invalid Registration");
      } else if(response.status===201){
        window.alert("User Registered");
        console.log("User Registered");
        navigate('/signin');
  
      } else if(response.status === 204){
        window.alert("Fields Cannot be left empty");
        console.log("Fields Cannot be left empty");
      } else{
        window.alert("new error");
        console.log("nre erro");
      }
    });
  };
  return (
    <div>
      <section className='signup'>
        <div className='container mt-5 border border-4 border-dark'>
          <div className='ms-3 content'>
            <h1 className='p-3 mb-3'>Sign Up</h1>
            <form method='POST'>
              <div className="col-md-6">
                <label>Your Name</label>
                <input type="text" className="form-control" name='name' autoComplete='off' onChange={handleChange} value={user.name} placeholder='Please Enter Your Name' />
              </div>
              <div className="col-md-6">
                <label  className="form-label">Email</label>
                <input type="email" className="form-control" name='email' autoComplete='off' onChange={handleChange} value={user.email} placeholder='Enter your email' />
              </div>
              <div className="col-md-6">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" name='password' autoComplete='off' onChange={handleChange} value={user.password} placeholder='Enter Password' />
              </div>
              <div className="col-6 ">
                <label  className="form-label">Contact Number</label>
                <input type="text" className="form-control" name='phone' autoComplete='off' onChange={handleChange} value={user.phone} placeholder='Enter your Contact Number' />
              </div>
              <div className="col-6">
                <label  className="form-label">Profession</label>
                <input type="text" className="form-control" name='work' autoComplete='off' onChange={handleChange} value={user.work} placeholder='Enter Profession' />
              </div>
              <div className="col-md-6">
                <label  className="form-label">Confirm Password</label>
                <input type="password" className="form-control" name='cpass' autoComplete='off' onChange={handleChange}  placeholder='Please Confirm your Password' />
              </div>
              <div className="col-12 mt-3 mb-3">
                <input type="submit" className="btn btn-primary" value="Register" onClick={registerData}/>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup;