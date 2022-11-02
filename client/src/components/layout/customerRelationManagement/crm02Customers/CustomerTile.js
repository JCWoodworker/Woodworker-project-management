import React, { useState } from 'react'
import { convertPhoneNumber } from '../../../../services/convertPhoneNumber'
import axios from 'axios'

const CustomerTile = ({ customer, deleteCustomer, setShowCustomerShow, setSelectedCustomerId }) => {
  const [showStatusMenu, setShowStatusMenu] = useState(false)
  const [customerCurrentStatus, setCustomerCurrentStatus] = useState(customer.status)

  let convertedPhone = "N/A"
  if (customer.cellPhone) {
    convertedPhone = convertPhoneNumber(customer.cellPhone)
  }

  const handleDeleteCustomer = event => {
    event.preventDefault()
    if (!confirm(`Are you sure you want to delete ${customer.firstName} ${customer.lastName}?  This cannot be undone!!`)) {
      console.log()
    } else {
      deleteCustomer(customer.id)
    }
  }

  const handleUpdateCustomerStatus = async (updatedStatus) => {
    try {
      const response = await axios.patch(`/api/v1/customers/`, {
        status: updatedStatus, customerId: customer.id, belongsToUserId: customer.userId
      })
      if (response.status === 201) {
        setCustomerCurrentStatus(updatedStatus)
        setShowStatusMenu(false)
      }
    } catch (error) {
      console.error(`Error in fetch: (${error.message})`)
    }
  }


  const handleClickCustomer = event => {
    event.preventDefault()
    setShowCustomerShow(true)
    setSelectedCustomerId(`${customer.id}`)
  }

  const handleClickEmail = event => {
    event.preventDefault()
    alert("Email not yet implemented")
  }

  const handleClickPhone = event => {
    event.preventDefault()
    alert("Phone not yet implemented")
  }

  const handleClickStatusCell = event => {
    event.preventDefault()
    setShowStatusMenu(true)
  }

  const handleStatusChange = event => {
    event.preventDefault()
    handleUpdateCustomerStatus(event.target.value)
    setShowStatusMenu(false)
  }

  const customerStatusOptions = [
    "Prospect",
    "Negotiating",
    "Commissioned",
    "Production",
    "Delivered",
    "Cancelled",
    "Issue",
    "Stale"
  ]

  let customerStatus = customerCurrentStatus

  if (showStatusMenu) {
    customerStatus = (
      <select
        id="dropdown"
        value={customerCurrentStatus}
        onChange={handleStatusChange}
        autoFocus
      >
        {customerStatusOptions.map((option, index) => {
          return (
            <option 
              key={`${index}${option}`}
              value={option}
              >
              {option}
            </option>
          )
        })}
      </select>
    )
  }

  return (
    <tr>
      <td><button id="delete-customer" onClick={handleDeleteCustomer}>❌</button></td>
      <td onClick={handleClickCustomer} id="clickable-row">{customer.firstName}</td>
      <td onClick={handleClickCustomer} id="clickable-row">{customer.lastName}</td>
      <td onClick={handleClickEmail} id="clickable-row">{customer.email}</td>
      <td onClick={handleClickPhone} id="clickable-row">{convertedPhone}</td>
      <td onClick={handleClickStatusCell} id="clickable-row">{customerStatus}</td>
    </tr>
  )
}

export default CustomerTile