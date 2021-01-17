import React, { Component } from 'react';
import slugify from 'slugify';
import FeatureItem from './FeatureItem';
import {FEATURES} from '../STORE';

class Features extends Component {
  render() { 
    const features = Object.keys(FEATURES).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = FEATURES[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));  
    return (
      <div className="Features">
        <fieldset className="feature" key={featureHash}>
          <FeatureItem 
            key={item.name}
            itemHash={itemHash}
            item={item}
            feature={feature}
            selected={this.props.selected}
            USCurrencyFormat={this.props.USCurrencyFormat}
            updateFeature={this.props.updateFeature}
            />
        </fieldset>
      </div>
      );
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });
    return (features)
  }
}
 
export default Features;