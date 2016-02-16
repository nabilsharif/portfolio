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
      backgroundColor: '#ffffff',
      bodyColor: '#444',
      titleColor: '#B02025',
      body: 'Below showcases the screens from the mobile flow of the site. The idea behind the design was to get the user into the story pages within a click from the main / home page. The navigation would slide in from the right, which will allow the users to scroll between trending tags.',
      columns: 3,
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
      title: 'B2C',
      skew: true,
      body: 'After a very successful launch of the the SNAPPA site PA were looking to redesign the site to cater to a more of a B2C audience. Below are some initial design ideas for the project. The focus here was about splitting the content into different sections, and cater the design to much younger audience.',
      backgroundColor: '#ffffff',
      bodyColor: '#444',
      titleColor: '#B02025',
      columns: 2,
      columnInfo: [
        { image: './b2c/HomepageB2cV1.jpg', title: 'Version 1' },
        { image: './b2c/HJomepageB2cV2.jpg', title: 'Version 2' },
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
      backgroundImageUrl: '/sticky9/Sticky9HomeHero.png',
      skew: true,
      project: {
        body: 'Sticky9 turns your favorite Instagram and Facebook snaps into Magnets. They also do personalised phone covers, posters, prints and stickers. The core audience of Sticky9 is very young millennial mums to be exact. The product is vibrant and fun which is reflected in the brand and design of the site and app.',
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
      body: 'Version 1 was a quick fix to incorporate an extra product on the page and to highlight the social aspect of the community as an upsell for ideas of how people are using the product. Version 2 is a project in progress, much more vibrant and focused on highlighting one product per page.',
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
      bodyColor: '#45306C',
      titleColor: '#45306C',
      body: 'I have created a number of other  responsive pages, to improve various parts on the site like customer service by designing a ‘Where is my order’ page and a more prominent way to highlight the Sticky9 app on the Download page.',
      columns: 2,
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
      body: 'Increasing AOV (average order value) was a key factor in the company strategy. The solution was to introduce Upsell Modals which would prompt the user to “Add” an accessory to their basket without breaking the user flow or being too intrusive. These turned out to be highly successful after a run of A/B testing.',
      columns: 3,
      columnInfo: [
        { image: './sticky9/MagnetBoard.png', title: 'Magnet Board' },
        { image: './sticky9/StripBoard.png', title: 'Magnet Strip' },
        { image: './sticky9/ShelfBoard.png', title: 'Print Shelf' },
        { image: './sticky9/AddAccessory.png', title: 'Accessories' },
        { image: './sticky9/MagnetSize.png', title: 'Magent Size' },

      ]
    }
  },

 {
    component: 'ScreenshotSlide',
    props: {
      title: 'MENU UI UPDATE',
      skew: true,
      backgroundColor: '#ffffff',
      bodyColor: '#45306C',
      titleColor: '#45306C',
      body: 'The menu was updated and rejigged to make it cleaner. The new menu also works better when translated into other languages. By splitting up the buttons into a new line, I was able to create more space and movement between the words and also make it easier to add additional menu items.',
      columns: 2,
      columnInfo: [
        { image: './sticky9/OldNavPart1.png', title: 'Old Nav' },
        { image: './sticky9/OldNavPart2.png', title: 'Old Dropdown' },
        { image: './sticky9/NewNavPart1.png', title: 'New Nav' },
        { image: './sticky9/NewNavPart2.png', title: 'New Dropdown' },
      ]
    }

  },

 
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
        body: 'PA’s new service (SNAPPA) is aimed at attracting and engaging younger audiences who increasingly consume content on mobile devices. SNAP.PA presents a visually led, shareable content with personality – encompassing news, sport, celebrity, social media, real life and more.',
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
      oneLineTitle: 'Version 1',
      body: 'Below showcases the screens from the mobile flow of the site. The idea behind the design was to get the user into the story pages within a click from the main / home page. The navigation would slide in from the right, which will allow the users to scroll between trending tags.',
      columns: 3,
      columnInfo: [
        { image: './transferwise/OnboardingStep1.png', title: 'Homepage' },
        { image: './transferwise/OnboardingStep2.png', title: 'Homepage' },
        { image: './transferwise/OnboardingStep3.png', title: 'Homepage' },
        { image: './transferwise/OnboardingStep4.png', title: 'Homepage' },
        { image: './transferwise/OnboardingStep1V2.png', title: 'Homepage' },
        { image: './transferwise/OnboardingStep2V2.png', title: 'Homepage' },
        { image: './transferwise/OnboardingStep3V2.png', title: 'Homepage' },
        { image: './transferwise/OnboardingStep4V2.png', title: 'Homepage' },
      ]
    }
  },
{
    component: 'ScreenshotSlide',
    props: {
      title: 'SETTINGS AND FAQ',
      skew: true,
      backgroundColor: '#ffffff',
      bodyColor: '#01C5FF',
      titleColor: '#01C5FF',
      oneLineTitle: 'Version 1',
      body: 'Below showcases the screens from the mobile flow of the site. The idea behind the design was to get the user into the story pages within a click from the main / home page. The navigation would slide in from the right, which will allow the users to scroll between trending tags.',
      columns: 3,
      columnInfo: [
        { image: './transferwise/SettingsAndFaQ1.png', title: 'Homepage' },
        { image: './transferwise/SettingsAndFaQ2.png', title: 'Homepage' },
        { image: './transferwise/SettingsAndFaQ3.png', title: 'Homepage' },
        { image: './transferwise/SettingsAndFaQ4.png', title: 'Homepage' },


      ]
    }
  },














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

















