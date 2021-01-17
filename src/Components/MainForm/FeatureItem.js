import React, { Component } from 'react';
import slugify from 'slugify';

class FeatureItem extends Component {
  render() { 
    const { 
      itemHash, 
      item, 
      feature, 
      selected, 
      USCurrencyFormat,
      updateFeature
      } = this.props;
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={item.name === selected[feature].name}
          onChange={e => updateFeature(feature, item)}
        />
        <label 
          htmlFor={itemHash} 
          className="feature__label"
          >
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  }
}

 
export default FeatureItem;