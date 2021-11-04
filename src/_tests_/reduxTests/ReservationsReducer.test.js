import createStore from '../../redux/createStore';

const store = createStore();

describe('reservations reducer', () => {
  it('should return the initial state', () => {
    expect(store.getState().reservations).toEqual({
      error: null,
      loading: false,
      list: [],
    });
  });
  it('should handle the AAPI_CALL_SUCCESS action', () => {
    store.dispatch({ type: 'API_CALL_SUCCESS' });
    expect(store.getState().reservations.loading).toBe(true);
  });

  it('should handle the LOAD_RESERVATIONS_SUCCESS action', () => {
    store.dispatch({ type: 'LOAD_RESERVATIONS_SUCCESS' });
    expect(store.getState().reservations.loading).toBe(false);
  });
});