import React, { useEffect } from 'react';
import Footer from './Footer'
import Navbar from './Navbar'

import {Amplify} from "aws-amplify"
import awsconfig from "../src/aws-exports"
import '@aws-amplify/ui-react/styles.css'

Amplify.configure({...awsconfig,ssr:true})

import { store } from '../store'
import { Provider } from 'react-redux'

import { signedIn, signedOut, justSignedUp } from '../slices/authSlice'

function Layout ({ children }){

 

 

  return (
    <Provider store={store}>
        <Navbar/>
        {children}
        <Footer/>
    </Provider>
  )
}

export default Layout