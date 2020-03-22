import React, { Component } from 'react';

class AddShare extends Component {
state = {
  isin: '',
}

onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form style={{ display: 'flex' }}>
        <input
          type="text"
          name="isin"
          placeholder="ISIN"
          style={{ flex: '10', padding: '5px'}}
          value={this.state.isin}
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
