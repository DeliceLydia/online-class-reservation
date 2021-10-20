import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import createStore from '../redux/createStore';
import Reservation from '../containers/ReservationsList';

const store = createStore();

describe('Reservations', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Route
              path="/"
              component={(props) => <Reservation history={props.history} />}
            />
          </Provider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
