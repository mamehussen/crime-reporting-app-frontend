import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth-context';

const NavLinks = props => {

  const auth = useContext(AuthContext);
    return(
        <li className="nav-item dropdown user-profile-dropdown order-lg-0 order-1">
    <a href="javascript:void(0);"  className="nav-link dropdown-toggle user" id="user-profile-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <div className="media">
        <img src="assets/img/menuiimage.png" className="img-fluid" alt="admin-profile" />
        <div className="media-body align-self-center">
          <h6>MENU</h6>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
    </a>
    <div className="dropdown-menu position-absolute animated fadeInUp" aria-labelledby="user-profile-dropdown">
      <div className>

        <div className="dropdown-item">
          <NavLink to="/" exact>  
          <a className ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>HOME</a>
          </NavLink>
        </div>

        <div className="dropdown-item">
        <NavLink to="/crimes" exact> 
          <a className ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-radio"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg>CRIMES</a>
        </NavLink>
        </div>

        <div className="dropdown-item">
        <NavLink to="/announcements" exact> 
          <a className ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-radio"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg>ANNOUNCEMENTS</a>
        </NavLink>
        </div>

        <div className="dropdown-item">
        <NavLink to="/missing" exact> 
          <a className ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>MISSING PEOPLE</a>
        </NavLink>
        </div>

        <div className="dropdown-item">
        <NavLink to="/wanted" exact> 
          <a className ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-x"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="18" y1="8" x2="23" y2="13"/><line x1="23" y1="8" x2="18" y2="13"/></svg>WANTED PEOPLE</a>
        </NavLink>
        </div>


      </div>
    </div>
  </li>
    );
}

export default NavLinks;