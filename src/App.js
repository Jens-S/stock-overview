import React, { Component } from 'react';
import Header from './components/layout/header';
import Shares from './components/Shares';
import AddShare from './components/AddShare';
import './App.css';

class App extends Component {
  state = {
    shares: [
      {
        isin: 'DE0005140008',
        shares: 10,
        purchasePrice: 10.211,
        currentPrice: 8.922,
      },
      {
        isin: 'US0378331005',
        shares: 3,
        purchasePrice: 280.456,
        currentPrice: 288.922,
      },
      {
        isin: 'US4581401001',
        shares: 30,
        purchasePrice: 49.456,
        currentPrice: 60.762,
      },
    ]
  }

  deleteShare = (isin) => {
    this.setState({ shares: [...this.state.shares.filter(share => share.isin !== isin)] });
  }

  addShare = (isin, newShares, purchasePrice) => {
    this.setState({ shares: [...this.state.shares, { isin, shares: newShares, purchasePrice }] });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddShare addShare={this.addShare}/>
          <Shares shares={this.state.shares} deleteShare={this.deleteShare} />
        </div>
      </div>
    );
  }
}

export default App;
