import { Request, Response } from "express";
import { hash } from "bcrypt";
import { randomBytes } from "crypto";
import { User } from "../../model/schemas/User";
import { Token } from "../../model/schemas/Token";
import { sendMail } from "../utils";

interface FlashRequest extends Request {
  flash: (obj: object) => {};
}

export const register = async (req: FlashRequest, res: Response) => {
  if (req.body.password !== req.body.password2) {
    req.flash({ info: "Passwords do not match" });
    res.redirect("/auth/register");
  }

  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    req.flash({ info: "Email already exists" });
    res.redirect("/auth/register");
  }

  const hashedPassword = await hash(req.body.passowrd, 10);
  user = await new User({
    username: req.body.username,
    first: req.body.first,
    last: req.body.last,
    hashedPassword,
    email: req.body.email,
  }).save();

  const token = await new Token({
    userId: user._id,
    token: randomBytes(32).toString(),
    dateCreated: new Date(),
  }).save();

  const message = `${process.env.BASE_URL}/auth/verify/${user?._id}/${token.token}`;
  sendMail(user.email, "Verify Email", message);
};

export const login = (req: FlashRequest, res: Response) => {
  res.redirect("/home/:userId");
};
