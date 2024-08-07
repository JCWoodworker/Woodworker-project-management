import React, { useState, useEffect } from 'react'
import translateServerErrors from '../../../../services/translateServerErrors'

import AddCustomerForm from './AddCustomerForm'
import CustomerTile from './CustomerTile'
import CustomerShow from './CustomerShow'

const CrmCustomerMain = (props) => {
  const [errors, setErrors] = useState([])
  const [showCustomerFormSection, setShowCustomerFormSection] = useState(false)
  const [showCustomerShow, setShowCustomerShow] = useState(false)
  const [selectedCustomerId, setSelectedCustomerId] = useState(null)

  const postNewCustomer = async newCustomerData => {
    try {
      const response = await fetch("/api/v1/customers", { 
        method: 'POST',
        headers: new Headers ({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(newCustomerData)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          setErrors(newErrors)
        }
        throw new Error(`${response.status} (${response.statusText})`)
      } else {
        const body = await response.json()
        setErrors([])
        props.setCustomers([...props.customers, body.newCustomer])
        setShowCustomerFormSection(false)
        return true
        }
      } catch (error) {
        console.error(`Error in fetch: (${error.message})`)
      }
  }

  const deleteCustomer = async (customerId) => {    
    try {
      const response = await fetch(`/api/v1/customers`, {
        method: "DELETE",
        headers: new Headers ({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({customerId: customerId})
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      } else {
        const newCustomerList = props.customers.filter(customer => {
          return customer.id != customerId
        })
        props.setCustomers(newCustomerList)
        console.log(`Customer deleted!`)
      }
    } catch (error) {
      console.error(`Error in DELETE: ${error.message}`)
    }
  }

  const customerList = props.customers.map(customer => {
    return (
      <CustomerTile
        key={customer.id}
        customer={customer}
        deleteCustomer={deleteCustomer}
        setShowCustomerShow={setShowCustomerShow}
        setSelectedCustomerId={setSelectedCustomerId}
      />
    )
  })

  let addCustomerFormSection = null
  let formSymbol = "+"
  const showForm = () => {
    showCustomerFormSection? setShowCustomerFormSection(false) : setShowCustomerFormSection(true)
  }

  if (showCustomerFormSection) {
    formSymbol = "-"
    addCustomerFormSection = 
    <AddCustomerForm
      postNewCustomer={postNewCustomer}
      user={props.user}
      errors={errors}
      setErrors={setErrors}
      setShowCustomerFormSection={setShowCustomerFormSection}
    />
  }

  let customerSection = (
    <>
      <h1>Customers</h1>
      {addCustomerFormSection}
      <div className='customer-table'>
        <table>
          <thead>
            <tr>
              <th><button id="add-customer" onClick={showForm}>{formSymbol}</button></th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Cell Phone</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {customerList}
          </tbody>
        </table>
      </div>
    </>
  )

  if (showCustomerShow) {
    const clickedCustomer = props.customers.filter(customer => customer.id == selectedCustomerId)
    customerSection = (
      <>
        <CustomerShow
          clickedCustomer={clickedCustomer}
          setShowCustomerShow={setShowCustomerShow}
        />
      </>
    )
  }



  return (
    <>
      {customerSection}
      <p>Click a customer's cell number to send SMS</p>
      <p>Click a customer's email address to send them an email</p>
    </>
  )

}

export default CrmCustomerMain