import React, { useEffect, useState } from "react"
import emailjs from "emailjs-com"

const EmailCampaignIndex = props => {
  const [userData, setUserData] = useState(null)

  const getUserData = async () => {
    try {
      const response = await fetch(`/api/v1/admin/userData`)
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setUserData(body.userData)
    } catch (error) {
      console.error(`Error in fetch: ${error}`)
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  let emailList = []
  if (userData) {
    userData.forEach(user => {
      emailList.push(` ${user.email}`)
    })
  }

  const sendEmail = event => {
    event.preventDefault()
    emailjs.sendForm('service_7r3ncp8', 'template_37h3218', event.target, '2Ju9HvBwIm4I6dtY0')
      .then((res) => {
        alert("Your email was sent successfully!")
        console.log(`${res.text}`)
      }, (error) => {
        console.error(error.text)
      })
      event.target.reset()
  }

  return (
    <>
      <div>
        <form onSubmit={sendEmail}>
        <h3>Send an email to all of your woodworkers!</h3>
        <h5>Let them know what's going on at the lumber yard, what's new in stock, or anything else you've got going on!</h5>
          <label htmlFor="email" className="email">
            <input
              type="hidden"
              name="email" 
              value={emailList}
            />
          </label>
          <label htmlFor="subject" className="subject">
            <input
              id="subject"
              className="subject" 
              type="text" name="subject" 
              placeholder="subject"
            />
          </label>
          <label htmlFor="message" className="message">
            <textarea 
              id="message" 
              type="textarea" 
              name="message" 
              placeholder="message"
            />
          </label>
          <input type="submit" value="Send Message"></input>
        </form>
      </div>
    </>
  )
}

export default EmailCampaignIndex