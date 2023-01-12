import express from "express"
import twilio from "twilio"

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const twilioRouter = new express.Router()

twilioRouter.get("/", (req, res) => {
  res.send("Twilio Router for Woodworker's Project Management App.  No GET requests here.")
})


twilioRouter.post("/outgoingMessages", async (req, res) => {
  try {
    const client = new twilio(accountSid, authToken)
    const { body } = req
    const message = await client.messages
      .create({
        body: `${body.message}`,
        from: '+14012102221',
        to: `+1${body.sendPhone}`
      })
    console.log(message)
    return res.status(200).json({ message: "Message sent successfully" })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

twilioRouter.post("/incomingMessages", async (req, res) => {
  try {
    const incomingMessageData = req.body
    console.log(incomingMessageData)
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})




export default twilioRouter