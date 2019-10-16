import Axios from 'axios'

const axios = Axios.create({
  baseURL: `https://yatmapp.herokuapp.com:6000`
})

export default axios
