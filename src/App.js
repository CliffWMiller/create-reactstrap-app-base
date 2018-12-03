import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import ExampleContainer from './containers/example-container';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ExampleContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
