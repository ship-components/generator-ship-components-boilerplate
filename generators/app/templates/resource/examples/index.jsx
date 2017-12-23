/**
 * Example
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
// This is an example file
// Modify this file for your own user
// import Component from '../src/index';

export default class Examples extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{'Examples Page'}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Examples />, document.getElementById('examples'));
