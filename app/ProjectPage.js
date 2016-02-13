import React from 'react';

import SlideList from './slides/SlideList';

const snappaSlides = [

  {
    component: 'BackSlide',
    props: {
    }
  },
  
  {
    component: 'ProjectHeroSlide',
    props: {
      backgroundImageUrl: '/SnappaHomeHero.png',
      skew: true,
      project: {
        body: 'PA’s new service (SNAPPA) is aimed at attracting and engaging younger audiences who increasingly consume content on mobile devices. SNAP.PA presents a visually led, shareable content with personality – encompassing news, sport, celebrity, social media, real life and more.',
        logo: '/SnappaLogo.svg',
        projectShotUrl: './SnappaHomeMobile.png',
        projectColor: '#B02025'
      }
    }
  },


  {
    component: 'ScreenshotSlide',
    props: {
      title: 'Mobile',
      skew: true,
      oneColumnTitle: 'Yo', 
      backgroundColor: '#ffffff',
      bodyColor: '#444',
      titleColor: '#B02025',
      body: 'PA’s new service (SNAPPA) is aimed at attracting and engaging younger audiences who increasingly consume content on mobile devices. SNAP.PA presents a visually led, shareable content with personality – encompassing news, sport, celebrity, social media, real life and more.',
      columns: 3,
      columnInfo: [
        { image: './SnappaHomeMobile.png', title: 'Homepage' },
        { image: './SnappaHomeMobile.png', title: 'Story' },
        { image: './SnappaHomeMobile.png', title: 'Story' },
      ]
    }
  },

  {
    component: 'ScreenshotSlide',
    props: {
      backgroundColor: '#B02025',
      title: 'Desktop',
      skew: true,
      body: 'PA’s new service (SNAPPA) is aimed at attracting and engaging younger audiences who increasingly consume content on mobile devices. SNAP.PA presents a visually led, shareable content with personality – encompassing news, sport, celebrity, social media, real life and more.',
      columns: 2,
      columnInfo: [
        { image: './SnappaHomeMobile.png', title: 'Homepage' },
        { image: './SnappaHomeMobile.png', title: 'Story' },
      ]
    }
  },

  {
    component: 'ScreenshotSlide',
    props: {
      title: 'B2C',
      skew: true,
      body: 'PA’s new service (SNAPPA) is aimed at attracting and engaging younger audiences who increasingly consume content on mobile devices. SNAP.PA presents a visually led, shareable content with personality – encompassing news, sport, celebrity, social media, real life and more.',
      backgroundColor: '#ffffff',
      bodyColor: '#444',
      titleColor: '#B02025',
      columns: 2,
      columnInfo: [
        { image: './SnappaHomeMobile.png', title: 'Version 1' },
        { image: './SnappaHomeMobile.png', title: 'Version 2' },
      ]
    }
  }
]

const sticky9Slides = [
  {
    component: 'BackSlide',
    props: {
    }
  },
  
  {
    component: 'ProjectHeroSlide',
    props: {
      backgroundImageUrl: '/SnappaHomeHero.png',
      skew: true,
      project: {
        body: 'BOOM BOOM.',
        logo: '/SnappaLogo.svg',
        projectShotUrl: './SnappaHomeMobile.png',
        projectColor: '#B02025'
      }
    }
  },
 
]

const transferWiseSlides = []

const projects = {
  snappa: snappaSlides,
  sticky9: sticky9Slides,
  transferwise: transferWiseSlides
}

export default class ProjectPage extends React.Component {  
  render() {
    return (
      <div className="page page--projectPage">
        <SlideList slides={projects[this.props.route.project]} />
      </div>
    );
  }

}