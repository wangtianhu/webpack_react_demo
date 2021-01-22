import { render } from 'less';
import React from 'react';

import ReactDom from 'react-dom';

import HomePage from './home';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <HomePage />
      </div>
    );
  }
}
ReactDom.render(<App />, document.getElementById('app'));
