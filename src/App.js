import React, {useState, useCallback} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import {Helmet} from 'react-helmet'

import Dashboard from './shared/pages/Dashboard';
import Crimes from './crimes/pages/Crimes';
import UserCrimes from './crimes/pages/UserCrimes';
import Announcements from './announcement/pages/Announcements';
import TopBar from './shared/components/Navigation/TopBar';
import MainContainer from './shared/components/UIElements/MainContainer'
import NewCrime from './crimes/pages/NewCrime';
import UpdateCrime from './crimes/pages/UpdateCrime';
import Auth from './auth/pages/Auth';
import { AuthContext } from './shared/context/auth-context';

import './assets/css/main.css'
import './bootstrap/css/bootstrap.min.css'
import './assets/css/plugins.css'
import './assets/css/authentication/form-2.css'
import './assets/css/forms/theme-checkbox-radio.css'
import './assets/css/forms/switches.css'
import './assets/css/elements/infobox.css'
import './assets/css/dashboard/dash_1.css'
import './assets/css/dashboard/dash_2.css'
import './assets/css/elements/alert.css'
import './assets/css/components/custom-modal.css'
import './plugins/table/datatable/datatables.css'
import './plugins/table/datatable/dt-global_style.css'
import './assets/img/favicon.ico'
import './assets/css/loader.css'
import './plugins/table/datatable/datatables.css'
import './plugins/table/datatable/dt-global_style.css'
import './assets/img/favicon.ico'

<Helmet>
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
<link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet" />

<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <script src="assets/js/libs/jquery-3.1.1.min.js"></script>
  <script src="bootstrap/js/popper.min.js"></script>
  <script src="bootstrap/js/bootstrap.min.js"></script>
  {/* <script src="plugins/perfect-scrollbar/perfect-scrollbar.min.js"></script>
  <script src="assets/js/app.js"></script>
  <script>
  </script>
  <script src="assets/js/custom.js"></script>
  <script src="assets/js/dashboard/dash_2.js"></script>
  <script src="plugins/blockui/jquery.blockUI.min.js"></script>
  <script src="assets/js/scrollspyNav.js"></script> */}
  </Helmet>

const App = () =>  {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, [])

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
        <Dashboard />
      </Route>
      <Route path="/crimes" exact>
        <Crimes />
      </Route>
      <Route path="/newcrime" exact>
        <NewCrime />
      </Route>
      <Route path="/:userId/crimes" exact>
        <UserCrimes />
      </Route>
      <Route path="/crimes/:crimeId" exact>
        <UpdateCrime />
      </Route>
      <Route path="/announcements" exact>
        <Announcements />
      </Route>
      
      <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
      <Route path="/announcements" exact>
        <Announcements />
      </Route>
      <Route path="/auth" exact>
        <Auth />
      </Route>
      <Redirect to="/auth" />
      </Switch>
    );
  }

  return (  
    <AuthContext.Provider 
    value={{ isLoggedIn: isLoggedIn, login: login, logout:logout }}>

    <Router>

      <MainContainer>
        {routes}
      </MainContainer>
    </Router>
    </AuthContext.Provider>
   
  );
}

export default App;