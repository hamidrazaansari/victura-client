import React, { Component } from 'react'
import '../assets/css/admin.css'

export class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard'>
        <h2>Hello Wahid</h2>
        <p>From your account dashboard you can view your recent orders, manage your shipping addresses and edit your password and account details.</p>
      </div>
    )
  }
}

export default Dashboard