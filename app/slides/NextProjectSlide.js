import React from 'react';
import Slide from './Slide';
import { Link } from 'react-router';

export default class NextProjectSlide extends React.Component {
  render() {
    return <Slide className="slide--nextProject" fullLength={true}>
        <div className="nextProject">
          <Link to={this.props.nextProjectUrl} >{this.props.name} →</Link>
        </div>
      </Slide>
  }
} 