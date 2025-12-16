import express from "express";
const router = express.Router();
export default router;

import { createUser, getUserByUsernameAndPassword } from "#db/queries/users";
import requireBody from "#middleware/requireBody";
import { createToken } from "#utils/jwt";
 ///implement try catch on all routes
router
  .route("/register")
  .post(requireBody(["username", "email", "password"]), async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const user = await createUser(username, email, password);
      const token = await createToken({ id: user.id });
      res.status(201).send(token);
    } catch (error) {
      if (error.code === "23505") {
        return res.status(409).send("Username or email already exists.");
      }
      res.status(500).send("An error occurred during registration.");
    }
  });


router
  .route("/login")
  .post(requireBody(["username", "password"]), async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await getUserByUsernameAndPassword(username, password);
      if (!user) return res.status(401).send("Invalid username or password.");

      const token = await createToken({ id: user.id });
      res.send(token);
    } catch (error) {
      res.status(500).send("An error occurred during login.");
    }
  });
