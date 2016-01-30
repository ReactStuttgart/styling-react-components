'use strict';

import React from 'react';
import styleable from 'react-styleable';
import classNames from 'classnames/bind';
import css from './ParticipantList.scss';
import { Button } from 'react-bootstrap';

import ParticipantListItem from '../ParticipantListItem/ParticipantListItem.jsx';

let cx = classNames.bind(css);

@styleable(css)
class ParticipantList extends React.Component {
  render() {
    let classes = cx({ 'root': true });

    const participantListItems = this.props.participants.map( (participant) => {
      return (
        <ParticipantListItem key={participant.twitter} participant={participant} />
      );
    });

    return (
      <div className={classes}>
        {participantListItems}

        <Button className={this.props.css.button} bsStyle="warning">Join us!</Button>
      </div>
    );
  }
}

ParticipantList.displayName = 'ParticipantList';

// Uncomment properties you need
// ParticipantList.propTypes = {};
// ParticipantList.defaultProps = {};

export default ParticipantList;
