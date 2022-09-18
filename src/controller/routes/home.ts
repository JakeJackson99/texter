const router = require("express").Router();
import { Request, Response } from "express";
import { getHome } from "../controllers/home";

router.use((req: Request, res: Response, next: any) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", getHome);

export default router;
