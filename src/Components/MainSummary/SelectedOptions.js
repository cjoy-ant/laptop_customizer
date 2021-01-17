import React, { Component } from 'react';

class SelectedOptions extends Component {
  render() { 
    const { selectedOption, USCurrencyFormat } = this.props;
    const summary = Object.keys(selectedOption).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selected = selectedOption[feature];
      
      return ( 
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selected.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selected.cost)}
          </div>
        </div>
       )
    });

    return summary;
  }
}
 
export default SelectedOptions;