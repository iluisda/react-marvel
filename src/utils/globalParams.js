import env from '../environments/env'
import getHash from './hash'

const PARAMS = {
  ts: env.API_PARAMS.TS,
  apikey: env.API_PARAMS.PUBLIC_KEY,
  hash: getHash(),
}
export default PARAMS
