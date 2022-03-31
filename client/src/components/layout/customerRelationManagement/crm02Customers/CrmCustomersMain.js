import React, { useState, useEffect } from 'react'
import translateServerErrors from '../../../../services/translateServerErrors'

import AddCustomerForm from './AddCustomerForm'
import CustomerTile from './CustomerTile'

const CrmCustomerMain = props => {
  const [errors, setErrors] = useState([])
  const [customers, setCustomers] = useState([])
  const [showCustomerFormSection, setShowCustomerFormSection] = useState(false)

  const fetchCustomers = async () => {
    try {
    const response = await fetch("/api/v1/customers")
    if (!response.ok) {
      throw new Error(`${response.status} (${response.statusText})`)
    }
    const body = await response.json()
    setCustomers(body.customers)
    } catch (error) {
      console.error(`Error in fetch: (${error.message})`)
    }
  }

  useEffect(() => {
    fetchCustomers()
  }, [])

  const postNewCustomer = async (newCustomerData) => {
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
        setCustomers([...customers, body.newCustomer])
        return true
        }
      } catch (error) {
        console.error(`Error in fetch: (${error.message})`)
      }
  }

  const customerList = customers.map(customer => {
    return (
    <CustomerTile 
      customer={customer}
    />
    )
  })

  let addCustomerFormSection = null
  let formSymbol = "+"
  const showForm = () => {
    showCustomerFormSection? setShowCustomerFormSection(false) : setShowCustomerFormSection(true)
  }

  if (showCustomerFormSection) {
    formSymbol = "Hide Form"
    addCustomerFormSection = 
    <AddCustomerForm
      postNewCustomer={postNewCustomer}
      user={props.user}
      errors={errors}
      setErrors={setErrors}
    />

  }

  return (
    <>
      <h1>Customers</h1>
      <button id="all-buttons" className='add-customer-button' onClick={showForm}>{formSymbol}</button>
      {addCustomerFormSection}
      <div className='customer-table'>
        <table>
          <thead>
            <tr>
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

}

export default CrmCustomerMain