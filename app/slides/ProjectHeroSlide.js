import React from 'react';
import Slide from './Slide';

export default class HeroSlide extends React.Component {
  render() {
    return <Slide className="slide--projectHero" skew={this.props.skew} fullLength={true} backgroundImageUrl={this.props.backgroundImageUrl}>
        <div className="projectHero">
          <img className="projectHero__heroImage" src={this.props.project.projectShotUrl} />
          <div className="projectInfo">
            <img className="projectHero__logo" src={this.props.project.logo} />
            <p className="projectHero__body">{this.props.project.body}</p>
            { this.props.projectUrl && <a href={this.props.projectUrl} style={{color: this.props.projectColor}} className="button projectHero__visitSiteButton">Visit Site</a> }
          </div>
        </div>
      </Slide>
  }
} 