import React, { Component, useState } from 'react'
import '../assets/css/admin.css'
function Order() {
  const [order, setOrder] = useState(false)
  return (
    <div className='dashboard'>
      {!order ?
        <p>No order has been made yet. Browse products</p>
        :
        <>
        <div className="order-listing">
          
        </div>
        </>
      }
    </div>
  )
}

export default Order

