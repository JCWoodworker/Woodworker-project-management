import React from 'react'

const CustomerTile = ({ customer }) => {

  let customerStatus = null
  if (customer.prospect) {
    customerStatus = "Prospect"
  }
  if (customer.negotiating) {
    customerStatus = "Negotiating"
  }
  if (customer.commissioned) {
    customerStatus = "Commissioned"
  }
  if (customer.delivered) {
    customerStatus = "Delivered"
  }
  if (customer.cancelled) {
    customerStatus = "Cancelled"
  }

  return (
    <tr>
      <td>{customer.firstName}</td>
      <td>{customer.lastName}</td>
      <td>{customer.email}</td>
      <td>{customer.cellPhone}</td>
      <td>{customerStatus}</td>
    </tr>
  )
}

export default CustomerTile