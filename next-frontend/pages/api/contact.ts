// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
let nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
  secure: true,
});

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const mailData = {
    from: process.env.GMAIL_USER,
    to: req.body.email,
    subject: req.body.subject,
    text: req.body.message,
    html: `<div>Message received: ${req.body.message}</div>`,
  };

  let error;
  transporter.sendMail(mailData, function (err: any, info: any) {
    error = err;
  });

  if (error) {
    console.log(error);
    res.status(500).json({ message: "Email not sent." });
  }else {
    res.status(200).json({ message: "Email sent." });
  }
}
