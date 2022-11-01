import { axios } from "~/config/axios"

export default async function next (request, response) {
  const nextUrl = request.query.next

  const res = await axios.get (nextUrl)

  const { data: results, ...rest } = res.data

  return response.json({ results, ...rest })
}
