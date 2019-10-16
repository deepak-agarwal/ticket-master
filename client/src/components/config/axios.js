import Axios from 'axios'

const axios = Axios.create({
  baseURL: `https://yatmapp.herokuapp.com:${process.env.PORT}`
})

export default axios
