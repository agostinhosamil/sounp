import useSWR from 'swr'
import axios from 'axios'

export const useFetch = (path, options) => {
  const slashRe = /^\/+/

  const pathPrefix = slashRe.test(path) ? '/api/' : process.env.API_URL;

  path = path.trim().replace(slashRe, '')

  const url = `${pathPrefix}/${path}`.split(/[\/\\]+/).join('/')

  const object = (obj) => {
    const anObject = {}

    return obj && obj.constructor === anObject.constructor ? obj : anObject
  }
  
  const { data, error } = useSWR(url, async () => {
    try {
      const { data: requestData } = await axios.get(url, object(options))

      return requestData
    } catch (error) {
      return {
        error,
        data: null
      }
    }
  })

  return {
    data,
    error
  }
}
