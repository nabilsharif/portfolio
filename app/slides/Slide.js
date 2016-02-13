import React from 'react';

export default class Slide extends React.Component {
  render() {
    const classNames = [ 
      "slide", 
      (this.props.fullLength ? "slide--fullLength" : ""), 
      this.props.className, 
      (this.props.backgroundFade ? 'slide--backgroundFade' : ''),
      (this.props.skew ? 'slide--skew' : '')
    ]

    return <div className={classNames.join(' ')}>
      <div className="slideBackground" style={{backgroundImage: "url(" + this.props.backgroundImageUrl + ')', backgroundColor: this.props.backgroundColor}} />
        { this.props.overlay && <div className="slideBackgroundOverlay" /> }
        { this.props.children }
    </div>
  }
}