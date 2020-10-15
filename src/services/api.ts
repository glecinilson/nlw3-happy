import axios from 'axios'

const api = axios.create({
  baseURL: 'http://172.25.232.110:3333'
})

export default api