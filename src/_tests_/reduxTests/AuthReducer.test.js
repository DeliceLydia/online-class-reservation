import createStore from '../../redux/createStore';

const store = createStore();

describe('Auth reducer', () => {
  it('should return the initial state', () => {
    expect(store.getState().auth).toEqual({
      currentUser: null,
      isAuthenticated: false,
      loading: false,
      error: null,
    });
  });
  it('should handle AUTH_API_CALL_SUCCESS', () => {
    store.dispatch({ type: 'API_CALL_SUCCESS' });
    expect(store.getState().auth).toEqual({
      currentUser: null,
      isAuthenticated: false,
      loading: true,
      error: null,
    });
  });
  it('should handle REGISTER_SUCCESS', () => {
    store.dispatch({
      type: 'REGISTER_USER_SUCCESS',
      payload: { name: 'user1' },
    });
    expect(store.getState().auth).toEqual({
      currentUser: { name: 'user1' },
      isAuthenticated: false,
      loading: false,
      error: null,
    });
  });

  it('should handle REGISTER_FAILURE', () => {
    store.dispatch({ type: 'REGISTER_USER_FAIL', payload: 'Signup failed' });
    expect(store.getState().auth).toEqual({
      currentUser: { name: 'user1' },
      isAuthenticated: false,
      loading: false,
      error: 'Signup failed',
    });
  });

  it('should not handle LOAD_COURSE_SUCCESS', () => {
    store.dispatch({ type: 'LOAD_TEACHERS_SUCCESS' });
    expect(store.getState().auth).toEqual({
      currentUser: { name: 'user1' },
      isAuthenticated: false,
      loading: false,
      error: 'Signup failed',
    });
  });

  it('should handle LOGIN_SUCCESS action', () => {
    store.dispatch({
      type: 'LOGIN_USER_SUCCESS',
      payload: { name: 'user1' },
    });
    expect(store.getState().auth).toEqual({
      currentUser: { name: 'user1' },
      isAuthenticated: true,
      loading: false,
      error: 'Signup failed',
    });
  });
});
