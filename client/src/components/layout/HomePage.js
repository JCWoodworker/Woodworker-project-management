import React from "react"
import AuthenticatedHomePage from "../layout/AuthenticatedHomePage"

const HomePage = props => {

  let display = (
    <div className="home-page-container">
      <h1>Welcome to the App!</h1>
      <p>*** Currently under construction ***</p>
      <p>The app will be FREE to use!</p>
    </div>
  )

  if (props.user) {
    display = 
      <AuthenticatedHomePage user={props.user} />
  }

  return (
    <>
      {display}
    </>
  )
}

export default HomePage