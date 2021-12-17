import { NextApiResponse, NextApiRequest } from "next";


export default function(request:NextApiRequest, response:NextApiResponse) {

  const dados = request.query

  const users = [
    {id:"asdasasd", name:""},
    {id:"", name:""},
    {id:"", name:""},
    {id:"", name:""},

  ]
  response.json(users);

}