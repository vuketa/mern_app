import React from "react";
import styled from "styled-components";
import logo from '../assets/logo.png'

const LoginPage = () => {
  return (
    <Wrapper className="page">
      <form className="form">
      <img src={logo} alt="" className="logo" />
      <h3>Login</h3>
        <div className="form-row">
          <label className="form-label">name</label>
          <input type="text" name="name"  className="form-input" />
        </div>
        <div className="form-row">
          <label className="form-label">email</label>
          <input type="text" name="email" className="form-input" />
        </div>
        <div className="form-row">
          <label className="form-label">password</label>
          <input type="text" name="password" className="form-input" />
        </div>
        <button type="submit" className="btn btn-block">submit</button>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
 
  img {
    width: 75px;
  }
  

  .form {
    max-width: 400px;
    border-top: 5px solid var(--clr-grey-4);
  }
  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  
`;

export default LoginPage;
