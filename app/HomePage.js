import React from 'react';

import SlideList from './slides/SlideList';

const slides = [
  {
    component: 'HeroSlide',
    props: {
      body: "As a UI & UX designer born and bred in London, I have worked across web, product, UI, UX, mobile, branding and print design. My skills range from user testing, wireframing, prototyping to creating detailed visual comps to name but a few."
    }
  },
  {
    component: 'ProjectSlide',
    props: {
      backgroundColor: '#B02025',
      name: 'SNAPPA',
      path: '/snappa',
      category: 'UI/UX design',
      body: 'A new service by The Press Association which is aimed at attracting and engaging a younger audience.'
    }
  },
  {
    component: 'ProjectSlide',
    props: {
      backgroundColor: '#45306C',
      path: '/sticky9',
      name: 'STICKY9',
      category: 'UI/UX Design',
      body: 'Sticky9 is a web and app based platform that turns your favorite Instagram and Facebook snaps into magnets and stickers.'
    }
  },
  {
    component: 'ProjectSlide',
    props: {
      backgroundColor: '#00B8FF',
      path: '/transferwise',
      name: 'Transferwise',
      category: 'UI/UX Design',
      body: 'TransferWise is an Estonian developed and UK-based peer-to-peer money transfer service for web and mobile.'
    }
  }
]

export default class HomePage extends React.Component {  
  render() {
    return (
      <div className="page page--homePage">
        <SlideList slides={slides} />
      </div>
    );
  }

}