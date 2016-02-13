import React from 'react';
import Slide from './Slide';

export default class ScreenshotSlide extends React.Component {
  render() {
    const screenshotListClassnames = ['screenshotList', 'screenshotList--' + this.props.columns];
    const classNames = ['slide--screenshot']

    if (this.props.backgroundColor === '#FFFFFF') {
      classNames.push('slide--white-background')
    }

    return <Slide className={classNames.join(' ')} skew={this.props.skew}  fullLength={true} backgroundColor={this.props.backgroundColor}>
      <div className="screenshot">

        <div className="screenshot__info">
          <span>
            <h1 className="screenshot__name" style={{color: this.props.titleColor}}>{this.props.title}</h1>
            <div className="titleUnderline" style={{backgroundColor: this.props.titleColor}}></div>
          </span>
          <p className="screenshot__body" style={{color: this.props.bodyColor}}>{this.props.body}</p>
        </div>

        <div className={screenshotListClassnames.join(' ')}>
          {this.props.oneColumnTitle && <div style={{color: this.props.bodyColor}} className="screenshotList__title">{this.props.oneColumnTitle}</div>}
          {this.props.columnInfo.map((c) => {
            return <div className="column">
              <span className="column__title" style={{color: this.props.bodyColor}}>{c.title}</span>
              <img className="column__img" src={c.image} />
            </div> 
          })}
        </div>
      </div>
    </Slide>
  }
} 