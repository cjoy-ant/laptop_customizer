import React, { Component } from 'react';
import Features from './Features';
import {FEATURES} from '../STORE';

class MainForm extends Component {
  render() { 
    return ( 
      <div className="MainForm">
        <form className="main__form">
          <h2>Customize your laptop</h2>
          <Features 
            USCurrencyFormat={this.props.USCurrencyFormat}
            updateFeature={this.props.updateFeature}
            features={FEATURES}
            selected={this.props.selected}
            />
        </form>
      </div>
     );
  }
}
 
export default MainForm;