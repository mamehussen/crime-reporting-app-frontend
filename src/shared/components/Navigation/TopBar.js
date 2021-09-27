import React from "react";
import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../context/auth-context';

const TopBar = props => {
  const auth = useContext(AuthContext);

    return (
      <div className="header-container">
  
   <header className="header navbar navbar-expand-sm">
    
    <div className="nav-logo align-self-center">
    <NavLink to="/" exact>  
      <a className="navbar-brand"><img alt="logo" src="assets/img/90x90.jpg" /> <span className="navbar-brand-name">Ethio CRA</span></a>
    </NavLink>
    </div>

    {/* {props.children} */}
    <ul className="navbar-item flex-row nav-dropdowns ml-auto">
    <NavLinks />

    <div className="row">
      {auth.isLoggedIn && 
    <NavLink to="/newcrime" exact> 
        <button className="btn btn-danger mb-2 nav-item">REPORT CRIME</button>
    </NavLink> }
  
  {!auth.isLoggedIn && 
  <NavLink to="/auth" exact> 
        <button className="btn btn-primary mb-2 nav-item">AUTHENTICATE</button>
    </NavLink> }

    <NavLink to="/auth" exact> 
        <button className="btn btn-danger mb-2 nav-item">REPORT ANONYMOUSLY</button>
    </NavLink>

    {auth.isLoggedIn && 
      <NavLink to="/auth" exact> 
      <button className="btn btn-primary mb-2 nav-item" onClick={auth.logout}>LOGOUT</button>
  </NavLink>
    }
    </div>

  {/* <li className="nav-item dropdown user-profile-dropdown order-lg-0 order-1">
  <a className href="auth_login.html"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1={21} y1={12} x2={9} y2={12} /></svg> Sign Out</a>

    <a href="javascript:void(0);" className="nav-link dropdown-toggle user" id="user-profile-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <div className="media">
        <img src="assets/img/90x90.jpg" className="img-fluid" alt="admin-profile" />
        <div className="media-body align-self-center">
          <h6><span>Hi,</span> Abebe</h6>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
    </a>
    <div className="dropdown-menu position-absolute animated fadeInUp" aria-labelledby="user-profile-dropdown">
      <div className>
        <div className="dropdown-item">
          <a className href="user_profile.html"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg> My Profile</a>
        </div>
        <div className="dropdown-item">
          <a className href="auth_login.html"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1={21} y1={12} x2={9} y2={12} /></svg> Sign Out</a>
        </div>
      </div>
    </div>
  </li> */}

  


</ul>


   </header>
   </div>
  

    );
}

export default TopBar;