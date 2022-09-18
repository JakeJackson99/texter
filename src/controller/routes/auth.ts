const router = require("express").Router();
import { register, login } from "../controllers/auth";

/*
  TODO
  - add passport.js authentication middleware
*/

router.post("/register", register);
router.post("/login", login);

export default router;
