import React, { Component } from 'react';
import SelectedOptions from './SelectedOptions';
import Total from './Total';

class MainSummary extends Component {
  render() { 
    return ( 
      <div className="MainSummary">
        <SelectedOptions 
          selectedOption={this.props.selectedOption}
          USCurrencyFormat={this.props.USCurrencyFormat}
          />
        <Total 
          USCurrencyFormat = {this.props.USCurrencyFormat}
          total={this.props.selectedOption}/>
      </div>
    );
  }
}
 
export default MainSummary;