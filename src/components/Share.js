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
        <div className='grid-share'>
          <div className='grid-share__item1'>
            {this.props.share.name} <br />
            {this.props.share.isin}
          </div>
          <div className='grid-share__item2'>
            {this.props.share.shares}
          </div>
          <div className='grid-share__item3'>
            {Math.round(((this.props.share.purchasePrice * this.props.share.shares) + Number.EPSILON) * 100) / 100} <br />
            {this.props.share.purchasePrice}
          </div>
          <div className='grid-share__item4'>
            {Math.round(((this.props.share.currentPrice * this.props.share.shares) + Number.EPSILON) * 100) / 100} <br />
            {this.props.share.currentPrice}
          </div>
          <div className='grid-share__item5'>

          </div>
          <div className='grid-share__item6'>
          <button onClick={this.props.deleteShare.bind(this, this.props.share.isin)} style={btnStyle}>x</button>
          </div>
        </div>
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
