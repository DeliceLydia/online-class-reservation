import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import { loginUserSuccess } from '../redux/actions/actionCreators';
import { loadTeachersAsync } from '../redux/thunk/teachersThunk'
import Teacher from '../components/Teacher';

const HomeTeacher = ({
  history, loginUser, loadTeachers, teachers,
}) => {
  useEffect(() => {
    const auth_token = localStorage.getItem('auth_token');
    if (!auth_token) history.replace('/signin');
    if (auth_token) {
      const user = jwtDecode(JSON.parse(auth_token));
      loginUser(user);
    }
    loadTeachers();
  }, []);
  return (
    <section>
        <>
          {teachers.map((teacher) => {
            return (
              <Teacher teacher={teacher} key={teacher.id} />
            );
          })}
        </>
    </section>
  );
}

HomeTeacher.propTypes = {
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  loadTeachers: PropTypes.func.isRequired,
  teachers: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.teachers.loading,
  teachers: state.teachers.list,
});

const mapDispatchToProps = {
  loginUser: (user) => loginUserSuccess(user),
  loadTeachers: () => loadTeachersAsync(),
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeTeacher);