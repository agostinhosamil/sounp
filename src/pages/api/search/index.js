import { axios } from "~/config/axios"

export default async function search (request, response) {
  const res = await axios.get ('/search', { 
    params: request.query
  })

  const { data: results, ...rest } = res.data

  return response.json({ results, ...rest })
}
