import Axios from 'axios'

const axios = Axios.create({
  baseURL: `https://yatmapp.herokuapp.com`
})

export default axios
