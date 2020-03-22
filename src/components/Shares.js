import React, { Component } from 'react';
import Share from './Share';
import PropTypes from 'prop-types';

class Shares extends Component {
  render() {
    return this.props.shares.map((share) => (
      <Share key={share.isin} share={share} deleteShare={this.props.deleteShare}/>
    ));
  }
}

Shares.propTypes = {
  shares: PropTypes.array.isRequired,
}

export default Shares;
