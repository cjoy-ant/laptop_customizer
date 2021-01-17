import React, { Component } from 'react';

class Total extends Component {
  render() { 
    const { total, USCurrencyFormat } = this.props;
    
    const cartTotal = Object.keys(total).reduce(
      (acc, curr) => acc + total[curr].cost,
      0
    );

    return ( 
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(cartTotal)}
        </div>
      </div>
     );
  }
}
 
export default Total;