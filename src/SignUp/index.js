import React from 'react';
import './index.css';

class SignIn extends React.Component {
  render() {
    return (
      <div className="instagram-signup__container">
        <section className="instagram-signup__content">
          <h3 className="instagram-signup__title">Instagram</h3>
          <h5 className="instagram-signup__subtitle">Sign up to see photos and videos from your friends.</h5>
          <div className="instagram-signup__marked">
            <div className="instagram-signup__bar"></div>
            <div className="instagram-signup__or">Or</div>
            <div className="instagram-signup__bar"></div>
          </div>
          <form>
            <input className="instagram-signup__input" type="text" placeholder="Email" />
            <input className="instagram-signup__input" type="text" placeholder="Full Name" />
            <input className="instagram-signup__input" type="text" placeholder="Username" />
            <input className="instagram-signup__input" type="text" placeholder="Password" />
            <button className="instagram-signup__button">Sign Up</button>
          </form>
          
        </section>
      </div>
    )
  }
}

export default SignIn;