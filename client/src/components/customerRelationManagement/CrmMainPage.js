import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import CrmCustomerMain from "./crm02Customers/CrmCustomersMain"
import CrmProjectsMain from "./crm03Projects/CrmProjectsMain"
import CrmAnalyticsMain from "./crm04Analytics/CrmAnalyticsMain"

const CrmMainPage = props => {
  const [showCrmHome, setShowCrmHome] = useState(true)
  const [showCustomers, setShowCustomers] = useState(false)
  const [showProjects, setShowProjects] = useState(false)
  const [showAnalytics, setShowAnalytics] = useState(false)
  const [homeButtonId, setHomeButtonId] = useState("highlighted-button")
  const [customersButtonId, setCustomersButtonId] = useState("all-buttons")
  const [projectsButtonId, setProjectsButtonId] = useState("all-buttons")
  const [analyticsButtonId, setAlyticsButtonId] = useState("all-buttons")

  const changeButtons = {
    buttonId: "all-buttons",
    showContainer: <p>Main Page</p>

  }

  const handleHomeClick = () => {
    setShowCrmHome(true)
    setShowCustomers(false)
    setShowProjects(false)
    setShowAnalytics(false)
    setHomeButtonId("highlighted-button")
    setCustomersButtonId("all-buttons")
    setProjectsButtonId("all-buttons")
    setAlyticsButtonId("all-buttons")
  }
  const handleCustomersClick = () => {
    setShowCrmHome(false)
    setShowCustomers(true)
    setShowProjects(false)
    setShowAnalytics(false)
    setHomeButtonId("all-buttons")
    setCustomersButtonId("highlighted-button")
    setProjectsButtonId("all-buttons")
    setAlyticsButtonId("all-buttons")
  }
  const handleProjectsClick = () => {
    setShowCrmHome(false)
    setShowCustomers(false)
    setShowProjects(true)
    setShowAnalytics(false)
    setHomeButtonId("all-buttons")
    setCustomersButtonId("all-buttons")
    setProjectsButtonId("highlighted-button")
    setAlyticsButtonId("all-buttons")
  }
  const handleAnalyticsClick = () => {
    setShowCrmHome(false)
    setShowCustomers(false)
    setShowProjects(false)
    setShowAnalytics(true)
    setHomeButtonId("all-buttons")
    setCustomersButtonId("all-buttons")
    setProjectsButtonId("all-buttons")
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
        id={projectsButtonId}
        onClick={handleProjectsClick}>
        Projects
      </button>
        <button 
          id={analyticsButtonId}
          onClick={handleAnalyticsClick}>
          Analytics
        </button>
    </div>
    
    let mainContainer = null
    if (showCrmHome) {
      mainContainer = (
        <>
          <h1>CRM Main Container</h1>
          <p>Coming Soon!!</p>
        </>
      )
    } else if (showCustomers) {
      mainContainer = <CrmCustomerMain />
    } else if (showProjects) {
      mainContainer = <CrmProjectsMain />
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