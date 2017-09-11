/**
 * Example
 */
import React from 'react';
import ReactDOM from 'react-dom';
import TagInput from '../src/index';
import Immutable from 'immutable';

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
