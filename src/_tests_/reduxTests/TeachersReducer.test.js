import createStore from '../../redux/createStore';

const store = createStore();

describe('Teacher reducer', () => {
  it('should return the initial state', () => {
    expect(store.getState().teachers).toEqual({
      error: null,
      list: [],
      loading: false,
    });
  });

  it('should handle the TEACHERS_SUCCESS action', () => {
    const teachers = [
      {
        id: 1,
        name: 'john doe',
        courses: 'Poetry',
        experience: '7yrs',
        image:
          'https://image.freepik.com/free-photo/senior-male-p…aining-writing-green-chalkboard_23-2148200956.jpg',
      },
    ];

    const action = {
      type: 'LOAD_TEACHERS_SUCCESS',
      payload: teachers,
    };

    store.dispatch(action);

    expect(store.getState().teachers.list).toEqual(teachers);
  });

  it('should handle the LOAD_TEACHERS_FAILURE action', () => {
    const error = 'Error';

    const action = {
      type: 'LOAD_TEACHERS_FAIL',
      payload: error,
    };

    store.dispatch(action);
    expect(store.getState().teachers.error).toEqual(error);
  });

  it('should throw an error when dispatching invalid action', () => {
    expect(() => {
      store.dispatch({ name: 'INVALID_ACTTION' });
    }).toThrow(
      "Actions may not have an undefined type' property. You may have misspelled an action type string constant.",
    );
  });
});
