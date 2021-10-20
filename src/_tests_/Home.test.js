import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Home from '../containers/Home';
import createStore from '../redux/createStore';

const store = createStore();

test('renders correctly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/" component={Home} />
      </Provider>
    </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
