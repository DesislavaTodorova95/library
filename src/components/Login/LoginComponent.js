import "./LoginComponent.css";
import {MdOutlineVisibility } from 'react-icons/md';
const LoginComponent = () => {
  return (
    <div className="loginDiv">
      <form id="LoginForm">
        <div className="logoImgDiv"></div>
        <h3 className="headWellcome">Wellcome Back!</h3>
        <label className="labelEmail" htmlFor="email">
          Email
        </label>
        <div className="emailInput">
          <input className="inp inpEmail" type="text" name="email"></input>
        </div>
        <label className="labelPassword" htmlFor="password">
          Password
        </label>
        <div className="passwordInput">
          <input className="inp inpPass" type="password" name="password"/>
          <p className="revealPassword" onClick={(e)=>{e.preventDefault();
        console.log('hhohoh')
         
        }}>Recover Password</p>
       </div>
       
        <button type="submit" form="LoginForm" className="loginBtn">
        <p>log in</p>
        </button>
        
      </form>
      <div className="loginImageDiv" />
    
    </div>
  );
};
export default LoginComponent;
