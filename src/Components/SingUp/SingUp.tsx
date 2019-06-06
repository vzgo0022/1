import React from 'react';

const SingUp = () => (
    <div className="App">
    <div>
      <p className="text">Sign Up for Free</p>
    </div>
    <div>
      <form id="form">
        <input type="text" placeholder="First Name*" className="Framework" />
        <input type="text" placeholder="Last Name*" className="Framework" />
        <br />
        <input
          type="email"
          placeholder="Email Address*"
          className="Framework ff"
        />
        <br />
        <input
          type="password"
          placeholder="Set A Password*"
          className="Framework ff"
        />
        <br />
        <button form="form" className="button Framework">
          <span className="text">GET STARTED</span>
        </button>
      </form>
    </div>
  </div>
);

export default SingUp;
