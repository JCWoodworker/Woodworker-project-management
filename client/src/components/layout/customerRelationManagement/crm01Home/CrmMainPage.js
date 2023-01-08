import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import CrmCustomerMain from "../crm02Customers/CrmCustomersMain"
import CrmAnalyticsMain from "../crm03Analytics/CrmAnalyticsMain"

const CrmMainPage = props => {
  const [showCrmHome, setShowCrmHome] = useState(true)
  const [showCustomers, setShowCustomers] = useState(false)
  const [showAnalytics, setShowAnalytics] = useState(false)
  const [homeButtonId, setHomeButtonId] = useState("highlighted-button")
  const [customersButtonId, setCustomersButtonId] = useState("all-buttons")
  const [analyticsButtonId, setAlyticsButtonId] = useState("all-buttons")

  const [customers, setCustomers] = useState([])

  const changeButtons = {
    buttonId: "all-buttons",
    showContainer: <p>Main Page</p>

  }

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


  const handleHomeClick = () => {
    setShowCrmHome(true)
    setShowCustomers(false)
    setShowAnalytics(false)
    setHomeButtonId("highlighted-button")
    setCustomersButtonId("all-buttons")
    setAlyticsButtonId("all-buttons")
  }
  const handleCustomersClick = () => {
    setShowCrmHome(false)
    setShowCustomers(true)
    setShowAnalytics(false)
    setHomeButtonId("all-buttons")
    setCustomersButtonId("highlighted-button")
    setAlyticsButtonId("all-buttons")
  }
  const handleAnalyticsClick = () => {
    setShowCrmHome(false)
    setShowCustomers(false)
    setShowAnalytics(true)
    setHomeButtonId("all-buttons")
    setCustomersButtonId("all-buttons")
    setAlyticsButtonId("highlighted-button")
  }

  let userNavigationSection =
    <div className="crm-top-links">
      <Link to='/crm'> 
        <button
          id={homeButtonId}
          onClick={handleHomeClick}>
            CRM Home
        </button>
      </Link>
      <button 
        id={customersButtonId}
        onClick={handleCustomersClick}>
        Customers
      </button>
      <button 
        id={analyticsButtonId}
        onClick={handleAnalyticsClick}>
        Analytics
      </button>
    </div>
  
  let customerCount = customers.length
    
  let mainContainer = null
  if (showCrmHome) {
    mainContainer = (
      <>
        <h1>CRM Home</h1>
        <p>Customer Count: {customerCount}</p>
      </>
    )
  } else if (showCustomers) {
    mainContainer = <CrmCustomerMain 
      user={props.user} 
      customers={customers} 
      setCustomers={setCustomers} 
    />
  } else if (showAnalytics) {
    mainContainer = <CrmAnalyticsMain />
  }

  return (
    <>
    <div className="crm-top-container">
      {userNavigationSection}
    </div>
    <div className="crm-main-container">
      {mainContainer}
    </div>
    </>
  )
}

export default CrmMainPage