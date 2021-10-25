import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppForm from '../common/AppForm';
import { registerUserAsync } from '../redux/thunk/authThunk';
import validationSchema from '../components/validation/userValidation';
import SubmitBtn from '../common/SubmitButton';
import InputForm from '../common/InputForm';
import Navbar from '../containers/Navbar3';

const SignUp = (props) => {
  const { currentUser, history } = props;
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const { currentUser, history } = props;
    if (token) history.replace('/');
    return currentUser ? history.replace('/') : '';
  }, []);
  const handleSubmit = (values) => {
    const { signupUser } = props;
    const { email, password } = values;
    const user = {
      email,
      password,
      name: values.name,
    };
    signupUser(user);
  };

  if (currentUser) history.replace('/');
  return (
    <>
      <Navbar />
      <div className="signup-container">
        <AppForm
          initialValues={{
            email: '',
            password: '',
            name: '',
          }}
          onSubmit={handleSubmit}
          validate={validationSchema}
        >
          <div className="signup-heading">
            <h1 className="signup-h1">Sign up</h1>
          </div>
          <form className="signup-form">
            <div className="field-container">
              <div className="signup-field">
                <InputForm name="name" placeholder="Name" type="name" className="form-control" />
              </div>
              <div className="signup-field">
                <InputForm name="email" placeholder="Email" type="email" className="form-control" />
              </div>
              <div className="signup-field">
                <InputForm name="password" placeholder="Password" type="password" className="form-control" />
              </div>
              <div className="signup-field">
                <SubmitBtn title="Sign Up" />
              </div>
            </div>
          </form>
          <div className="down-par">
            Already have an account?
            <Link to="/" className="">
              Sign in
            </Link>
          </div>
        </AppForm>
      </div>
    </>
  );
};

SignUp.defaultProps = {
  currentUser: null,
};

SignUp.propTypes = {
  signupUser: PropTypes.func.isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any),
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = {
  signupUser: (user) => registerUserAsync(user),
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
