import React, { Component } from 'react';
import { TodoContainer, TodoDetailsContainer, TodoPostContainer } from './Component';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <TodoPostContainer /> */}
        <Route exact path="/" component={TodoContainer} />
        <Route path='/detail/:id' render={(props) => <TodoDetailsContainer {...props} />} />
      </div>
    );
  }
}

export default App;
