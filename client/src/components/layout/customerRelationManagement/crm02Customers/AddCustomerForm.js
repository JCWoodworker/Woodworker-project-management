import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import ErrorList from '../../ErrorList'

const AddCustomerForm = props => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [newCustomer, setNewCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cellPhone: "",
    projectId: "",
    userId: props.user.id
  })

  const handleInputChange = event => {
    setNewCustomer({ ...newCustomer, [event.currentTarget.name]: event.currentTarget.value })
  }

  const clearForm = () => {
    setNewCustomer({
    firstName: "",
    lastName: "",
    email: "",
    cellPhone: "",
    projectId: "",
    userId: props.user.id
    })
    props.setErrors([])
  }

  const handleSubmit = async event => {
    event.preventDefault()
    props.postNewCustomer(newCustomer)
    clearForm()
    
  }

  const handleCancel = event => {
    return <Redirect push to='/crm' />
  }

  return (
    <form className="new-customer-form" >
      <ErrorList errors={props.errors}/>
      <h3 className="new-customer-heading">New Customer:</h3>
      <label htmlFor="firstName" className="firstName">First Name
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleInputChange}
          value={newCustomer.firstName}
        />
      </label>
      <label htmlFor="lastName" className="lastName">Last Name
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleInputChange}
          value={newCustomer.lastName}
        />
      </label>
      <label htmlFor="email" className="email">Email
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleInputChange}
          value={newCustomer.email}
        />
      </label>
      <label htmlFor="cellPhone" className="cellPhone">Cell Phone
        <input
          type="text"
          id="cellPhone"
          name="cellPhone"
          onChange={handleInputChange}
          value={newCustomer.cellPhone}
        />
      </label>
      <div className="new-customer-buttons">
        <input 
          id="all-buttons"
          type="submit"
          onClick={handleSubmit}>
        </input>
        <button 
          id="all-buttons"
          onClick={handleCancel}>
            Cancel
        </button>
      </div>
    </form>
  )

}

export default AddCustomerForm