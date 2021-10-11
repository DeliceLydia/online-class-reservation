import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppForm from '../common/AppForm';
import { registerUserAsync } from '../redux/thunk/authThunk';
import validationSchema from '../components/validation/userValidation';
import SubmitBtn from '../common/SubmitButton';
import InputForm from '../common/InputForm';

const SignUp = (props) => {
  const { currentUser, history } = props;
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const { currentUser, history } = props;
    if (token) history.replace('/');
    return currentUser ? history.replace('/signin') : '';
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

  if (currentUser) history.replace('/signin');
  return (
    <div className="login">
      <div className="login-triangle" />
      <AppForm
        initialValues={{
          email: '',
          password: '',
          name: '',
        }}
        onSubmit={handleSubmit}
        validate={validationSchema}
      >
        <form className="login-container">
          <div className="container">
            <h1 className="login-header">Sign up</h1>
          </div>
          <InputForm name="name" placeholder="Name" type="name" />
          <InputForm name="email" placeholder="Email" type="email" />
          <InputForm name="password" placeholder="Password" type="password" />
          <SubmitBtn title="SignUp" />
        </form>
      </AppForm>
      <div className="container signin">
        Already have an account?
        <Link to="/signin" className="">
          Sign in here
        </Link>
      </div>
    </div>
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
