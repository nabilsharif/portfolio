import React from 'react';

import SlideList from './slides/SlideList';

const slides = [
  {
    component: 'HeroSlide',
    props: {
      body: "Nabil Sharif is a UX & UI Designer born and bred in London-town. He has worked across web design, print, branding, UI, UX and design leadership. Nabil latest obsession is visual design from the 80s. You can find him either listening to Run DMC or working at Sticky9."
    }
  },
  {
    component: 'ProjectSlide',
    props: {
      backgroundColor: '#B02025',
      name: 'SNAPPA',
      path: '/snappa',
      category: 'Web and mobile site',
      body: 'PA’s new service (SNAPPA) is aimed at attracting and engaging younger audiences who increasingly consume content on mobile devices.'
    }
  },
  {
    component: 'ProjectSlide',
    props: {
      backgroundColor: '#45306C',
      path: '/sticky9',
      name: 'STICKY9',
      category: 'UI/UX Design',
      body: 'PA’s new service (SNAPPA) is aimed at attracting and engaging younger audiences who increasingly consume content on mobile devices.'
    }
  },
  {
    component: 'ProjectSlide',
    props: {
      backgroundColor: '#00B8FF',
      path: '/transferwise',
      name: 'Transferwise',
      category: 'UI/UX Design',
      body: 'PA’s new service (SNAPPA) is aimed at attracting and engaging younger audiences who increasingly consume content on mobile devices.'
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