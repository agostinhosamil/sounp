import { axios } from "@config/axios"

export default async function show (request, response) {
  const { id } = request.query

  const res = await axios.get(`/track/${id}`)

  const music = res.data

  return response.json(music)
}
