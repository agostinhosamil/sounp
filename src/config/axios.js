import Axios from "axios"

export const axios = Axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.RAPID_API_HOST
  }
})
