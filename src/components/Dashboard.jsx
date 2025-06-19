import React, { useEffect, useState } from 'react'
import '../assets/css/admin.css'
import { BaseUrl } from '../utills/BaseUrl';
import axios from 'axios';

function Dashboard() {
 
  return (
    <div className='dashboard'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
          </div>
          <div className="col-lg-9">
            <h2>Hello {data.name}</h2>
            <p>From your account dashboard you can view your recent orders, manage your shipping addresses and edit your password and account details.</p>

          </div>
        </div>
      </div>
    </div>
  )
}


export default Dashboard