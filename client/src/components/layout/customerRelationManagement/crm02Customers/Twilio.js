import React from "react"
import axios from "axios"

const Twilio = ({ convertedPhone }) => {

  const handleClickPhone = async () => {
    const smsMessage = window.prompt("Type your message and click OK to send it.")
    if (smsMessage == null || smsMessage.trim() == "") {
      alert('You cannot send a blank message!')
    } else {
      try {
        const response = await axios.post(
          "/api/v1/twilio/outgoingMessages", 
          {
            message: smsMessage,
            sendPhone: convertedPhone.split("-").join("")
          }
        )
        if (response.status === 200) {
          alert("Your message was successfully sent!")
        }
      } catch (error) {
        console.error(`Error in fetch: ${error}`)
        alert("There was an error sending your message")
      }
    }
  }

  return (
    <div onClick={handleClickPhone}>{convertedPhone}</div>
  )
}

export default Twilio
