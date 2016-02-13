import React from 'react';
import Slide from './Slide';

export default class BackSlide extends React.Component {
  render() {
    return <Slide className="slide--back" fullLength={true}>
        <div className="hero">
          <a href="/">Back</a>
        </div>
      </Slide>
  }
} 