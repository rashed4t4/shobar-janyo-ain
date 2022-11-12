import React from 'react'
import {Amplify} from "aws-amplify"
import { Authenticator } from '@aws-amplify/ui-react';

function login() {
  return (
    <Authenticator/>
  )
}

export default login