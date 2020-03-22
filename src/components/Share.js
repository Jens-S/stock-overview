import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Share extends Component {
  getStyle = () => {
    let style = {
      padding: '20px',
    }
    if(this.props.share.currentPrice / this.props.share.purchasePrice > 1.1) {
      style.backgroundColor = '#4BB543';
    } else if(this.props.share.currentPrice / this.props.share.purchasePrice < 1) {
      style.backgroundColor = '#FF9494';
    } 
    return style;
  }

  render() {
    return (
      <div style={this.getStyle()}>
        {this.props.share.isin}
        <button onClick={this.props.deleteShare.bind(this, this.props.share.isin)} style={btnStyle}>x</button>
      </div>
    )
  }
}

Share.propTypes = {
  share: PropTypes.object.isRequired,
}

const btnStyle = {
  backgroundColor: '#ddd',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
}

export default Share;
