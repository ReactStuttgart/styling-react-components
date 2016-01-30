'use strict';

import React from 'react';
import styleable from 'react-styleable';
import classNames from 'classnames/bind';
import css from './ParticipantListItem.scss';

let cx = classNames.bind(css);

@styleable(css)
class ParticipantListItem extends React.Component {

  handleClick(participant) {
    alert(participant.name + ' has joined #ReactStuttgart.');
    console.log(participant);
  }

  render() {
    let classes = cx({ 'root': true });

    return (
      <div className={classes} onClick={this.handleClick.bind(this, this.props.participant)}>
        <span className={this.props.css.twitter}>{this.props.participant.twitter}</span>
      </div>
    );
  }
}

ParticipantListItem.displayName = 'ParticipantListItem';

// Uncomment properties you need
// ParticipantListItem.propTypes = {};
// ParticipantListItem.defaultProps = {};

export default ParticipantListItem;
