import { axios } from '@config/axios'

export class API {
  /**
   * @method any
   */
  static async get (path, config = {}) {
    try {
      const response = await axios.get(path, config || {})

      return response
    } catch (error) {
      return { error, data: null }
    }
  }
}
