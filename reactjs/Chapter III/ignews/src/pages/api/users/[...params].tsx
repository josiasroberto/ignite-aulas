import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  // const id = request.query
  console.log(request.query)

  const users = [
    { id: 1, name: 'Josias' },
    { id: 2, name: 'Roberto' },
    { id: 3, name: 'Elias' },
  ]
  return response.json(users)
}