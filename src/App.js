import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Signin from './userAuth/Signin';
import Register from './userAuth/Register';
import Reservation from './containers/ReservationsList';
import HomeTeacher from './containers/Teacher';
import TeachersDetails from './containers/TeachersDetails';
import Logout from './containers/Logout';

const App = () => (
  <BrowserRouter>
    <main>
      <ToastContainer className="toast-container-custom" />
      <Switch>
        <Route exact path="/signup" component={Register} />
        <Route exact path="/reservations" component={Reservation} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/teachers" component={HomeTeacher} />
        <Route exact path="/teachers/:id" component={TeachersDetails} />
        <Route exact path="/" component={Signin} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
