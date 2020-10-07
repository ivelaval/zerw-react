import React from 'react';
import { Home } from '@components/Home';
import ReactIcon from '@assets/images/react-icon.svg';

const App = (): JSX.Element => (
  <div>
    <img src={ReactIcon} alt={'react logo'} width={200} />
    <Home userName="Martin Avila Castro" lang="React" />
  </div>
);

export default App;
