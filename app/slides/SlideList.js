import React from 'react';

import Slide from './Slide';
import HeroSlide from './HeroSlide';
import ProjectHeroSlide from './ProjectHeroSlide';
import ProjectSlide from './ProjectSlide';
import ScreenshotSlide from './ScreenshotSlide';
import BackSlide from './BackSlide';
import NextProjectSlide from './NextProjectSlide';

import {TrackDocument, Track, TrackedDiv} from 'react-track';
import {topTop,
        topBottom,
        centerCenter,
        topCenter,
        bottomBottom,
        bottomTop,
        getDocumentRect,
        getDocumentElement,
        calculateScrollY} from 'react-track/lib/tracking-formulas';
import {Motion, spring, presets} from 'react-motion';

const slideRegistry = {
  'HeroSlide': HeroSlide,
  'ProjectSlide': ProjectSlide,
  'ProjectHeroSlide': ProjectHeroSlide,
  'ScreenshotSlide': ScreenshotSlide,
  'BackSlide': BackSlide,
  'NextProjectSlide': NextProjectSlide
}

export default class SlideList extends React.Component {  
  render() {
    return (
      <div className="container">
        <TrackDocument formulas={[topTop]}>
        {
          topTop =>
            <div className="slideList">
              { 
                this.props.slides.map(
                  slide => React.createElement(
                    slideRegistry[slide.component], 
                    slide.props
                  ) 
                )
              }
            </div>
         }
        </TrackDocument>
      </div>
    );
  }

}