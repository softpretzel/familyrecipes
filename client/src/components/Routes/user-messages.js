import React, { Component } from 'react'
import Header from '../header'
import Footer from '../footer'
import  { Link } from 'react-router-dom'

class UserMessages extends Component {
  render() {
    return (
      <div>
        <Header />
        <Link to='/'><button className='backBtn'>Back</button></Link>
          <p>This page should render a user's messages</p>
        <Footer />
      </div>
    )
  }
}
export default UserMessages
