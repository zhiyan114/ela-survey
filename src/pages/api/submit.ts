import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/server_lib/prisma';
type Data = {
  message: string
}
const requiredField = [
  "qone",
  "qtwo",
  "qthree",
  "qfour",
  "qfive",
  "age",
  "gender",
  "ethnicity",
  "education",
  "inital",
]

type formField = {
  qone: string,
  qtwo: string,
  qthree: string,
  qfour: string,
  qfive: string,
  age: string,
  gender: string,
  ethnicity: string,
  education: string,
  inital: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Check and see if the request body has all the fields and 400 if not
  for(const field of requiredField) {
    if([undefined, null, ""].find(val=> val === req.body[field]))
      return res.status(400).json({
        message: "Missing Required Form Information. Submitting form via manual API call is not supported."
      });
  }
  
  // Check inital length
  if(req.body['inital'].length !== 2) return res.status(400).json({
    message: "Bad Data Supplied. Submitting form via manual API call is not supported."
  });

  // At that point we'll just trust the submitter
  const dbRes = await prisma.response.create({
    data: req.body as formField
  })
  return res.status(200).json({
    message: `Survey has been successfully submitted. Once again, thank you for your submission. Here's your confirmation code: ${dbRes.confirm_id}`
  })
}
