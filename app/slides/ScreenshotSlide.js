import React from 'react';
import Slide from './Slide';

export default class ScreenshotSlide extends React.Component {
  render() {
    const screenshotListClassnames = ['screenshotList', 'screenshotList--' + this.props.columns];
    const classNames = ['slide--screenshot', this.props.className];

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

        { this.props.prototype_walkthrough? (
          <div className="prototype-walkthrough">
            { /* Column images for prototype */ }
            <div className={screenshotListClassnames.join(' ')}>
              {this.props.prototype_walkthrough.columnInfo.map((c, index) => {
                return <div className="column" key={index}>
                <span className="column__title" style={{color: this.props.bodyColor}}>{c.title}</span>
                <img className="column__img" src={c.image} />
                </div>
              })}
            </div>

            {
              /* Description for prototype */
              this.props.prototype_walkthrough.description? (
                <div className="description">
                  <div className="text">
                   { this.props.prototype_walkthrough.description.text }
                  </div>
                  <img className="gif" src={this.props.prototype_walkthrough.description.gif} />
                </div>
              ) : null
            }
          </div>
        ) : null }

        {this.props.oneColumnTitle && <div style={{color: this.props.bodyColor}} className="screenshotList__title">{this.props.oneColumnTitle}</div>}
        <div className={screenshotListClassnames.join(' ')}>
          {this.props.columnInfo.map((c, index) => {
            return <div className="column" key={index}>
              <span className="column__title" style={{color: this.props.bodyColor}}>{c.title}</span>
              <img className="column__img" src={c.image} />
            </div>
          })}
        </div>
      </div>
    </Slide>
  }
}
