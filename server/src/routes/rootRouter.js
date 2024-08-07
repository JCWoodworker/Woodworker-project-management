import express from "express"
import userSessionsRouter from "./api/v1/userSessionsRouter.js"
import usersRouter from "./api/v1/usersRouter.js"
import clientRouter from "./clientRouter.js"
import weatherRouter from "./api/v1/weatherRouter.js"
import projectsRouter from "./api/v1/projectsRouter.js"
import hardwoodsRouter from "./api/v1/hardwoodsRouter.js"
import scraperRouter from "./api/v1/scraperRouter.js"
import adminRouter from "./api/v1/adminRouter.js"
import projectImagesRouter from "./api/v1/projectImagesRouter.js"
import crmCustomersRouter from "./api/v1/crmCustomerRouter.js"
import crmCustomerNotesRouter from "./api/v1/crmCustomerNotesRouter.js"
import twilioRouter from "./api/v1/twilioRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/", clientRouter)
rootRouter.use("/api/v1/user-sessions", userSessionsRouter)
rootRouter.use("/api/v1/users", usersRouter)
rootRouter.use("/api/v1/weather", weatherRouter)
rootRouter.use("/api/v1/projects", projectsRouter)
rootRouter.use("/api/v1/hardwoods", hardwoodsRouter)
rootRouter.use("/api/v1/scraper", scraperRouter)
rootRouter.use("/api/v1/admin", adminRouter)
rootRouter.use("/api/v1/projectImages", projectImagesRouter)
rootRouter.use("/api/v1/customers", crmCustomersRouter)
rootRouter.use("/api/v1/customerNotes", crmCustomerNotesRouter)
rootRouter.use("/api/v1/twilio", twilioRouter)

export default rootRouter
