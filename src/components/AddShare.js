import React, { Component } from 'react';

class AddShare extends Component {
state = {
  isin: '',
  shares: '',
  purchasePrice: '',
}

onSubmit = (e) => {
  e.preventDefault();
  this.props.addShare(this.state.isin, this.state.shares, this.state.purchasePrice);
  this.setState(
    {
      isin: '',
      shares: '',
      purchasePrice: '',
    }
  );
}

onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="isin"
          placeholder="ISIN"
          style={{ flex: '5', padding: '5px'}}
          value={this.state.isin}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="shares"
          placeholder="Shares"
          style={{ flex: '3', padding: '5px'}}
          value={this.state.shares}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="purchasePrice"
          placeholder="Purchase price"
          style={{ flex: '3', padding: '5px'}}
          value={this.state.purchasePrice}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}

export default AddShare;
