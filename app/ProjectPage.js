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
      backgroundImageUrl: '/snappa/SnappaHomeHero.png',
      skew: true,
      projectUrl: 'http://snappa.press.net',
      project: {
        body: 'PA’s new service (SNAPPA) is aimed at attracting and engaging younger audiences who increasingly consume content on mobile devices. SNAP.PA presents a visually led, shareable content with personality – encompassing news, sport, celebrity, social media, real life and more.',
        logo: '/snappa/SnappaLogo.svg',
        projectShotUrl: './snappa/SnappaHomeMobile.png',
        projectColor: '#B02025'
      }
    }
  },


  {
    component: 'ScreenshotSlide',
    props: {
      title: 'Mobile',
      skew: true,
      backgroundColor: '#ffffff',
      bodyColor: '#444',
      titleColor: '#B02025',
      body: 'Below showcases the screens from the mobile flow of the site. The idea behind the design was to get the user into the story pages within a click from the landing page. The navigation would slide in from the right, which will allow the users to scroll between trending tags.',
      columns: 3,
      prototype_walkthrough:{
        columnInfo: [
          { image: './snappa/home.png' },
          { image: './snappa/story.png' },
          { image: './snappa/nav.png' },
        ],
        description:{
          text: 'Prototype showing the user flow from landing page to story',
          gif: './snappa/design_walkthrough.gif', alt: 'design walkthrough',
        }
      },
      columnInfo: [
        { image: './mobile/SnappaCategoriesMobile.png', title: 'Homepage' },
        { image: './mobile/SnappaStoriesMobile', title: 'Story' },
        { image: './mobile/SnappaNavMobile.png', title: 'Nav' },
      ]
    }
  },

  {
    component: 'ScreenshotSlide',
    props: {
      backgroundColor: '#B02025',
      bodyColor: '#ffffff',
      title: 'Desktop',
      skew: true,
      body: 'The Desktop version was more focused on a visually led homepage, with big high quality images and a slider to show the latest emerging stories. All of the content was split into categories for ease of navigation.',
      columns: 2,
      columnInfo: [
        { image: './desktop/Homepage.jpg', title: 'Homepage' },
        { image: './desktop/StoryPage.jpg', title: 'Story' },
      ]
    }
  },

  {
    component: 'ScreenshotSlide',
    props: {
      title: 'B2C Visual Comps',
      skew: true,
      body: 'After a very successful launch of the the Snappa site Press Association were looking to redesign the site to cater to a more of a B2C audience. Below are some initial design ideas for the project. The focus here was about splitting the content into different sections, and cater the design to much younger audience.',
      backgroundColor: '#ffffff',
      bodyColor: '#444',
      titleColor: '#B02025',
      columns: 2,
      columnInfo: [
        { image: './b2c/HomepageB2cV1.jpg', title: 'Version 1' },
        { image: './b2c/HJomepageB2cV2.jpg', title: 'Version 2' },
      ]
    }
  },

  {
    component: 'NextProjectSlide',
    props: {
      name: 'Sticky9',
      nextProjectUrl: '/sticky9'
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
      backgroundImageUrl: '/sticky9/Sticky9HomeHero.png',
      skew: true,
      projectUrl: 'http://sticky9.com',
      project: {
        body: 'Sticky9 turns your favorite Instagram and Facebook snaps into Magnets. They also do personalised phone covers, posters, prints and stickers. The core audience of Sticky9 is very young, millennial mums to be exact. The product is vibrant and fun which is reflected in the brand and design of the site and app.',
        logo: '/sticky9/Sticky9Logo.png',
        projectShotUrl: './sticky9/Sticky9HomeMobile.png',
        projectColor: '#B02025'
      }
    }
  },

  {
    component: 'ScreenshotSlide',
    props: {
      title: 'PRODUCT REDESIGN',
      skew: true,
      backgroundColor: '#45306C',
      bodyColor: '#ffffff',
      titleColor: '#ffffff',
      body: 'Version 1 was designed to incorporate an extra product on the page (The Jigsaw Magnet) and to highlight the social aspect of the community as an upsell for ideas of how people are using the product. Version 2 is a project in progress, it has a much more vibrant feel and is focused on highlighting one product per page.',
      columns: 2,
      columnInfo: [
        { image: './sticky9/Sticky9ProductV1.png', title: 'Version 1' },
        { image: './sticky9/Sticky9ProductV2.png', title: 'Version 2' },
      ]
    }

  },

    {
    component: 'ScreenshotSlide',
    props: {
      title: 'Other Pages',
      skew: true,
      backgroundColor: '#ffffff',
      bodyColor: '#2b2b2b',
      titleColor: '#45306C',
      body: 'I have created a number of other responsive pages, to optimize various aspects of the site including customer service and app downloads.',
      className: 'slide--screenshot--sticky9',
      columnInfo: [
        { image: './sticky9/WismoDesktop.png', title: 'WISMO Desktop' },
        { image: './sticky9/MobileWismo.png', title: 'WISOMO Mobile' },
        { image: './sticky9/AppDownloadDesktop.png', title: 'App Download Desktop' },
        { image: './sticky9/AppDownloadMobile.png', title: 'App Download Mobile' },
        { image: './sticky9/ContactFormDesktop.png', title: 'Contact Form Desktop' },
        { image: './sticky9/ContactFormMobile.png', title: 'Contact Form Mobile' },
      ]
    }
  },

{
    component: 'ScreenshotSlide',
    props: {
      title: 'UPSELL MODALS',
      skew: true,
      backgroundColor: '#45306C',
      bodyColor: '#ffffff',
      titleColor: '#ffffff',
      body: 'How to increase AOV (average order value) was a key factor. The solution was to introduce upsell modals which would prompt the user to add an accessory to their basket without breaking the user flow or being too intrusive. These turned out to be highly successful after a run of A/B testing.',
      columns: 3,
      columnInfo: [
        { image: './sticky9/MagnetBoard.png', title: 'Magnet Board' },
        { image: './sticky9/StripBoard.png', title: 'Magnet Strip' },
        { image: './sticky9/ShelfBoard.png', title: 'Print Shelf' },
      ]
    }
  },

 {
    component: 'ScreenshotSlide',
    props: {
      title: 'MENU UI UPDATE',
      skew: true,
      backgroundColor: '#ffffff',
      bodyColor: '#2b2b2b',
      titleColor: '#45306C',
      body: 'The menu was updated to add more content and make it clearer across all devices. The new design also worked better when translated into other languages. By splitting up the menu and cart into a new line, I was able to create more space and movement between the words.',
      columns: 1,
      columnInfo: [
        { image: './sticky9/OldNavPart1.png', title: 'Old Nav' },
        { image: './sticky9/OldNavPart2.png', title: 'Old Dropdown' },
        { image: './sticky9/NewNavPart1.png', title: 'New Nav' },
        { image: './sticky9/NewNavPart2.png', title: 'New Dropdown' },
      ]
    }

  },

  {
    component: 'NextProjectSlide',
    props: {
      nextProjectUrl: '/transferwise',
      name: 'Transferwise'
    }
  }


]

const transferWiseSlides = [
{
    component: 'BackSlide',
    props: {
    }
  },
  {
    component: 'ProjectHeroSlide',
    props: {
      backgroundImageUrl: '/transferwise/TransferwiseHomeHero.png',
      skew: true,
      project: {
        body: 'TransferWise is an Estonian developed and UK-based peer-to-peer money transfer service launched in January 2011. More than £3 billion has been transferred through the App who supports more than 300 currency routes across the world. ',
        logo: '/transferwise/transferwiselogo.png',
        projectShotUrl: './transferwise/TransferwiseHomeMobile.png',
        projectColor: '#B02025'
      }
    }
  },

 {
    component: 'ScreenshotSlide',
    props: {
      title: 'ONBOARDING',
      skew: true,
      backgroundColor: '#01C5FF',
      bodyColor: '#ffffff',
      titleColor: '#ffffff',
      oneColumnTitle: 'Version 1',
      body: 'Created a concept onboarding process for the app. The idea was to help and understand how easy it is to use and send money abroad through a series of steps taking the user through a mock transaction.',
      columns: 4,
      columnInfo: [
        { image: './transferwise/OnboardingStep1.png', title: '' },
        { image: './transferwise/OnboardingStep2.png', title: '' },
        { image: './transferwise/OnboardingStep3.png', title: '' },
        { image: './transferwise/OnboardingStep4.png', title: '' },
        { image: './transferwise/OnboardingStep1V2.png', title: '' },
        { image: './transferwise/OnboardingStep2V2.png', title: '' },
        { image: './transferwise/OnboardingStep3V2.png', title: '' },
        { image: './transferwise/OnboardingStep4V2.png', title: '' },
      ]
    }
  },
{
    component: 'ScreenshotSlide',
    props: {
      title: 'SETTINGS AND FAQ',
      skew: true,
      backgroundColor: '#ffffff',
      bodyColor: '#2b2b2b',
      titleColor: '#01C5FF',
      oneColumnTitle: 'Drill down FAQ',
      body: 'Created a mock version of the settings and FAQ page for the app, with a cleaner layout and a drilled down FAQ section to help users get to answers quicker and in turn making the whole process less stressful. ',
      columns: 4,
      columnInfo: [
        { image: './transferwise/SettingsAndFaQ1.png', title: '' },
        { image: './transferwise/SettingsAndFaQ2.png', title: '' },
        { image: './transferwise/SettingsAndFaQ3.png', title: '' },
        { image: './transferwise/SettingsAndFaQ4.png', title: '' },


      ]
    }
  },

  {
    component: 'NextProjectSlide',
    props: {
      nextProjectUrl: '/snappa',
      name: 'Snappa'
    }
  }

]



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
