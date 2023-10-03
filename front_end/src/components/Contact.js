import React, { useState } from 'react'

function Contact() {
  const [user, setUser] = useState({
    name: "", email: "", msg: "", number: ""
  })
  let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value })
  }
  return (
    <div>
      <div className='contact-card'>
        <div class="card mb-3 card-sty" >
          <div class="row g-0">
            <div class="col-md-4 d-flex align-items-center">
              <img src="https://as2.ftcdn.net/v2/jpg/04/57/82/85/1000_F_457828563_KHhkJWf6SnhkTorEYqAFygHuxZxiA4PH.jpg" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Phone</h5>
                <p class="card-text">12345679</p>

              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 card-sty" >
          <div class="row g-0">
            <div class="col-md-4 d-flex align-items-center">
              <img src="https://as1.ftcdn.net/v2/jpg/02/14/70/20/1000_F_214702051_dZIF3brngTt2ahKl56l30hRgUviKWIC0.jpg" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Phone</h5>
                <p class="card-text">12345679</p>

              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 card-sty" >
          <div class="row g-0">
            <div class="col-md-4 d-flex align-items-center">
              <img src="https://as1.ftcdn.net/v2/jpg/03/66/63/52/1000_F_366635299_S1MlOWCcUVFPwgtxznb89r56tvyBBBVU.jpg" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Phone</h5>
                <p class="card-text">12345679</p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='signup'>
        <div className='container mt-5 border border-4 border-dark d-flex align-items-center justify-content-center'>
          <div className='content'>
            <h1 className='m-4'>Get In Touch With Us</h1>
            <form>
              <div>
                <div className="col-md-6">
                  <label>Your Name</label>
                  <input type="text" className="form-control" name='name' autoComplete='off' onChange={handleChange} value={user.name} placeholder='Please Enter Your Name' />
                </div>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Email</label>
                  <input type="email" className="form-control" name='email' autoComplete='off' onChange={handleChange} value={user.email} placeholder='Enter your email' />
                </div>
                <div className="col-6 ">
                  <label for="inputAddress" className="form-label">Contact Number</label>
                  <input type="text" className="form-control" name='number' autoComplete='off' onChange={handleChange} value={user.number} placeholder='Enter your Contact Number' />
                </div>
              </div>
              <div>
                <div className="col-6">
                  <label for="inputAddress2" className="form-label">Message</label>
                  <textarea className="form-control" name='msg' autoComplete='off' onChange={handleChange} value={user.msg} placeholder='Enter Profession' />
                </div>
              </div>
              <div>
                <div className="col-12 mt-3 mb-3">
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>




    </div>



  )
}

export default Contact;