import { createTransport } from "nodemailer";

/** Sends an email
 *
 * @param to the recipient of the email
 * @param subject the subject of the email
 * @param text the body of the email
 */
export const sendMail = (to: string, subject: string, text: string): void => {
  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  transporter.sendMail(
    {
      from: process.env.USER,
      to,
      subject,
      text,
    },
    (err) => {
      if (err) return console.error("Unable to send email", err);
      console.log("Email sent successfuly");
    }
  );
};
