import React from 'react';
import Slide from './Slide';

export default class HeroSlide extends React.Component {
  render() {
    return <Slide className="slide--hero" fullLength={true} skew={true} >
        <div className="hero">
          <img className="hero__logo" src="Logo.svg" />
          <p className="hero__body">{this.props.body}</p>
        </div>
      </Slide>
  }
} 