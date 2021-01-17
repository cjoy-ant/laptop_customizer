import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import MainForm from './Components/MainForm/MainForm';
import MainSummary from './Components/MainSummary/MainSummary';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: {
        Processor: {
          name: '',
          cost: '',
        },
        'Operating System': {
          name: '',
          cost: ''
        },
        'Video Card': {
          name: '',
          cost: ''
        },
        Display: {
          name: '',
          cost: ''
        }
      }
    }
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() { 
    return ( 
      <div className="App">
        <Header />
        <main>
          <MainForm 
            selected={this.state.selected}
            updateFeature={this.updateFeature}
            USCurrencyFormat={USCurrencyFormat}
            />
          <MainSummary 
            selectedOption={this.state.selected}
            USCurrencyFormat={USCurrencyFormat}/>
        </main>
      </div>
     );
  }
}
 
export default App