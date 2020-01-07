import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Login from './Login'
import Footer from './Footer'

import '../StyleSheets/Home.scss'

class Home extends Component {

  constructor(){
    super()    
  }

  render() {

    const { history } = this.props

    const userAuth = (
      <Login />
    )
    const welcome = (
      <i>Welcome</i>
    )
    return (
      <div>
      <div id="fondo">
        {
          localStorage.usertoken ?  welcome : userAuth 
        }
      </div>
      <Footer />
      </div>
    )
  }
}

export default withRouter(Home)