require('normalize.css');


import React from 'react';
import styleable from 'react-styleable';
import classNames from 'classnames/bind';
import css from './Main.scss';

import ParticipantList from './ParticipantList/ParticipantList.jsx';

let reactStuttgartImg = require('../images/reactstuttgart.png');

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      participants: [
        { twitter: '@chautzi', name: 'Christoph' },
        { twitter: '@soosap', name: 'Prasath' }
      ]
    };
  }

  render() {
    return (
      <div className={this.props.css.root}>
        <img src={reactStuttgartImg} alt="React Stuttgart" />

        <ParticipantList participants={this.state.participants} />
      </div>
    );
  }
}

App.defaultProps = {};

export default styleable(css)(App);
