import React, { useState } from 'react'
import { convertPhoneNumber } from '../../../../services/convertPhoneNumber'

const CustomerShow = ({ clickedCustomer, setShowCustomerShow }) => {
  
  const handleGoBackClick = event => {
    event.preventDefault()
    setShowCustomerShow(false)
  }
  
  let convertedPhone = "N/A"
  if (clickedCustomer[0].cellPhone) {
    convertedPhone = convertPhoneNumber(clickedCustomer[0].cellPhone)
  }

  return (
    <>
      <h2>{clickedCustomer[0].firstName} {clickedCustomer[0].lastName}</h2>
      <p>{clickedCustomer[0].email}</p>
      <p>Cell: {convertedPhone}</p>
      <button id="all-buttons" onClick={handleGoBackClick}>Back to Customers</button>
    </>
  )
}

export default CustomerShow