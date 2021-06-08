import React, { useState } from 'react'

const Contact = () => {
  const [data, setData] = useState({
    fname: '',
    phone: '',
    email: '',
    msg: ''
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      }
    })
  }
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fname} and my mobile number is ${data.phone}  `)
  };
  return (
    <>
      <div className="my-3">
        <h1 className="text-center">This is Contact Page</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full-Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1"
                  name="fname"
                  value={data.fname}
                  onChange={inputEvent}
                  placeholder="Enter Your Name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter Your Mobile Number" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="Enter Your Email" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                  rows="3"></textarea>
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-outline-primary mb-3">Submit Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;