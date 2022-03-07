import express, { response } from "express";
import passport from "passport";
import { User } from "../../../models/index.js";

const usersRouter = new express.Router();

usersRouter.post("/", async (req, res) => {
  const { email, password, passwordConfirmation, admin } = req.body;  
  try {
    const persistedUser = await User.query().insertAndFetch({ email, password, admin });
    return req.login(persistedUser, () => {
      return res.status(201).json({ user: persistedUser });
    });
  } catch (error) {
    console.log(error);
    return res.status(422).json({ errors: error });
  }
})

usersRouter.post("/edit", async (req, res) => {
  const { id, woodWaste, markup, laborRate } = req.body
  try {
    const user = await User.query().findById(id)
    const newUserSettings = 
      await user
        .$query()
        .patchAndFetch({
          woodWaste: woodWaste,
          markup: markup,
          laborRate: laborRate
        })
    debugger
    return res.status(201).json({ user: newUserSettings })
  } catch(error) {
    return res.status(500).json({ errors: error })
  }
})

export default usersRouter;
