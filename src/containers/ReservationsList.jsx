import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadReservationsAsync } from '../redux/thunk/reservationsThunk';
import Teacher from '../components/teacher';

const Reservation = ({
  history, loadReservations, teachers,
}) => {
  useEffect(() => {
    const authToken = localStorage.getItem('auth_token');
    if (!authToken) history.replace('/signin');
    loadReservations();
  }, []);
  return (
    <>
      {teachers.length > 0 ? (
        <div>
          {teachers.map((teacher) => (
            <Teacher teacher={teacher} key={teacher.id} />
          ))}
        </div>
      ) : (
        'List is empty'
      )}
    </>
  );
};

Reservation.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  loadReservations: PropTypes.func.isRequired,
  teachers: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.reservations.loading,
  teachers: state.reservations.list.map((reservation) => reservation.teacher),
});

const mapDispatchToProps = {
  loadReservations: () => loadReservationsAsync(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);
