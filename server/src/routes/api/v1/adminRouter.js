import express from "express"
import AdminUserSerializer from "../../../../serializers/adminSerializers/AdminUserSerializer.js"
import AdminProjectSerializer from "../../../../serializers/adminSerializers/AdminProjectSerializer.js"
import AdminProjectWoodSerializer from "../../../../serializers/adminSerializers/AdminProjectWoodSerializer.js"

import { User, Project, ProjectWood } from "../../../models/index.js"


const adminRouter = new express.Router()

adminRouter.get("/userData", async (req, res) => {
  try {
    const userData = await User.query()
    const serializedUserData = await Promise.all(
      userData.map(async (user) => {
        return await AdminUserSerializer.getSummary(user)
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
    const serializedProjectData = await Promise.all(
      projectData.map(async (project) => {
        return await AdminProjectSerializer.getSummary(project)
      })
    )
    return res.status(200).json({ projectData: serializedProjectData })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

adminRouter.get("/woodData", async (req, res) => {
  try {
    const woodData = await ProjectWood.query().withGraphFetched('hardwood')
    const serializedProjectWoodData = await Promise.all(
      woodData.map(async (project) => {
        return await AdminProjectWoodSerializer.getSummary(project)
      })
    )
    return res.status(200).json({ woodData: serializedProjectWoodData })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

export default adminRouter