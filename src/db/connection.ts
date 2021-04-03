import { connect } from 'mongoose'
import config from '~/config'
const { DB } = config

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}

export const connectDB = async () => {
  connect(DB.URI, dbOptions)
    .then(() => console.log('💾 Connection to database success!'))
    .catch(console.error.bind(console, 'Connection to database error:'))
}
