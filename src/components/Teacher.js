import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  loadReservationsAsync,
  addToReservationsAsync,
  removeToReservationsAsync,
} from '../redux/thunk/reservationsThunk';

const Teacher = ({
  teacher, reservations, loadReservations, addToReservations, removeToReservations,
}) => {
  useEffect(() => {
    loadReservations();
  }, []);
  const res = reservations.find((r) => r.teacher.id === teacher.id);
  return (
    <>
      {teacher && (
        <div className="card-container" key={teacher.id}>
          <div className="blocks-container">
            <Card>
              <Link to={`/teachers/${teacher.id}`}>
                <Card.Title className="title">{teacher.name}</Card.Title>
              </Link>
              <Card.Body>
                <Card.Text className="course">
                  <span>
                    Courses:
                    {teacher.courses}
                  </span>
                </Card.Text>
                <Card.Text className="experience">
                  <span>
                    Experience:
                    {teacher.experience}
                  </span>
                </Card.Text>
                {res ? (
                  <Button
                    className="button"
                    onClick={() => removeToReservations(res.id)}
                  >
                    REMOVE TO RESERVATION
                  </Button>
                ) : (
                  <Button className="button" onClick={() => addToReservations(teacher)}>
                    ADD TO RESERVATIONS
                  </Button>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

Teacher.defaultProps = {
  reservations: [],
};

Teacher.propTypes = {
  teacher: PropTypes.objectOf(PropTypes.any).isRequired,
  reservations: PropTypes.arrayOf(PropTypes.any),
  addToReservations: PropTypes.func.isRequired,
  removeToReservations: PropTypes.func.isRequired,
  loadReservations: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.reservations.loading,
  reservations: state.reservations.list,
});

const mapDispatchToProps = {
  addToReservations: (teacher) => addToReservationsAsync(teacher),
  removeToReservations: (reservationsId) => removeToReservationsAsync(reservationsId),
  loadReservations: () => loadReservationsAsync(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Teacher);
