'use strict';

import * as React from 'react';

import Todo from './Todo';

export default class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <h1>todo</h1>
        <Todo />
      </React.Fragment>
    )
  }
}
