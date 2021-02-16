import axios from 'axios'
import env from '../environments/env'
import PARAMS from '../utils/globalParams'

const getCharacters = () => axios.get(`${env.BASE_URL + env.API_VERSION + env.CHARACTER}`, {
  params: PARAMS,
})
export default getCharacters

export const getComic = (comicURL) => axios.get(comicURL, {
  params: PARAMS,
})
