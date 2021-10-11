import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Signin from './userAuth/Signin';
import Register from './userAuth/Register';
import Home from './containers/Home';
import Navbar from './containers/Navbar';
// import Teacher from './components/Teacher';
// import Logout from './containers/Logout';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/signup" component={Register} />
      <Route path="/signin" component={Signin} />
      {/* <Route path="/teachers" component={Teacher} />
      <Route path="/logout" component={Logout} /> */}
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
