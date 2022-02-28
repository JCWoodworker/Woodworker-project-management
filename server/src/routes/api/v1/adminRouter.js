import express from "express"
import UserSerializer from "../../../../serializers/adminSerializers/UserSerializer.js"
import AdminProjectSerializer from "../../../../serializers/adminSerializers/AdminProjectSerializer.js"

import { User, Project, ProjectWood } from "../../../models/index.js"


const adminRouter = new express.Router()

adminRouter.get("/userData", async (req, res) => {
  try {
    const userData = await User.query()
    const serializedUserData = await Promise.all(
      userData.map(async (user) => {
        return await UserSerializer.getSummary(user)
      })
    )
    const nonAdminUsers = serializedUserData.filter(user => !user.admin)
    return res.status(200).json({ userData: nonAdminUsers })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

adminRouter.get("/projectData", async (req, res) => {
  try {
    const projectData = await Project.query()
    debugger
    const serializedProjectData = await Promise.all(
      projectData.map(async (project) => {
        return await AdminProjectSerializer.getSummary(project)
      })
    )
    debugger
    return res.status(200).json({ projectData: serializedProjectData })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

export default adminRouter