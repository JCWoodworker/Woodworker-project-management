import express, { response } from "express";
import passport from "passport";
import cleanUserInput from "../../../../services/cleanUserInput.js"
import { User } from "../../../models/index.js";

const usersRouter = new express.Router();

usersRouter.post("/", async (req, res) => {
  const { email, password, admin } = req.body;  
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

usersRouter.post('/edit', async (req, res) => {
  debugger
  const formInput = cleanUserInput(req.body)
  const { id, name, price} = formInput
  try {
    // const updatedUserSettings = 
    //   await User
    //     .query()
    //     .patchAndFetchById(
    //       id, {
    //         name: name,
    //         price: price
    //       })
    // const serializedUpdatedHardwood = await HardwoodSerializer.getSummary(updatedHardwood)
    // debugger
    // return res.status(201).json({ hardwood: serializedUpdatedHardwood})
  } catch (error) {
    // if (error instanceof ValidationError) {
    //   return res.status(422).json({ errors: error.data })
    // }
    // return res.status(500).json({ errors: error })
  }
})

export default usersRouter;
