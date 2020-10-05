import * as React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';

test('Home component after render', () => {
  const home = shallow(<Home userName="Ivan" lang="react" />);

  // Interaction demo
  expect(home.text()).toEqual('Hi Ivan would you like react?');

  // Snapshot demo
  expect(home).toMatchSnapshot();
});
