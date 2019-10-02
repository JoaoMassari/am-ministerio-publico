import React from 'react'
import Loadable from 'react-loadable'
import getMenuItems from './menuItems'
import LoadingComponent from 'rmw-shell/lib/components/LoadingComponent'
import locales from './locales'
import routes from './routes'
import themes from './themes'
import grants from './grants'

const Loading = () => <LoadingComponent />

const LPAsync = Loadable({
  loader: () => import('../../src/pages/LandingPage'),
  loading: Loading
})

const config = {
  firebase_config: {

    apiKey: "AIzaSyC475P4PPV4AvCyGnGobqf8-ltZTWpNZEQ",
    authDomain: "production-am.firebaseapp.com",
    databaseURL: "https://production-am.firebaseio.com",
    projectId: "production-am",
    storageBucket: "",
    messagingSenderId: "491567249295",
    appId: "1:491567249295:web:fe81b848bba6d2afafbdfa"

  },
  firebase_config_dev: {
    apiKey: "AIzaSyD9BtFaZ6w7WqnhvRGZde-SRQDK9hBdmIw",
    authDomain: "development-am.firebaseapp.com",
    databaseURL: "https://development-am.firebaseio.com",
    projectId: "development-am",
    storageBucket: "",
    messagingSenderId: "88446163200",
    appId: "1:88446163200:web:27350341b582b3c0dabbe5" 
   
  },
  firebase_providers: ['google.com', 'password'], /* 'facebook.com', 'twitter.com', 'github.com', 'password','phone'], */
  initial_state: {
    themeSource: {
      isNightModeOn: true,
      source: 'light'
    },
    locale: 'en'
  },
  drawer_width: 256,
  locales,
  themes,
  grants,
  routes,
  getMenuItems,
  firebaseLoad: () => import('./firebase'),
  landingPage: LPAsync
}

export default config
