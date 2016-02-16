import React from 'react';
import Slide from './Slide';
import { Router, Route, Link, browserHistory } from 'react-router'

export default class ProjectSlide extends React.Component {
  render() {
    return <Slide className="slide--project" fullLength={false} skew={true} backgroundColor={this.props.backgroundColor}>
      <div className="project">
          <span className="project__category">{this.props.category}</span>
          <span>
            <h1 className="project__name">{this.props.name}</h1>
            <div className="titleUnderline"/>
          </span>
          <p className="project__body">{this.props.body}</p>
          <Link to={this.props.path} style={{color: this.props.backgroundColor}} className="button project__viewWorkButton">View work</Link>
        </div>
    </Slide>
  }
} 