import { connect } from 'mongoose'

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}

connect('mongodb://localhost/kevma-db', dbOptions)
  .then(() => console.log('💾 Connection to database success!'))
  .catch(console.error.bind(console, 'Connection to database error:'))

export default connect
