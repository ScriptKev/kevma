import dotenv from 'dotenv'
dotenv.config()

type TConfig = {
  PORT: string | number,
  DB: {
    URI: string
  }
}

const uri: string = 'mongodb+srv://kevma:kevmaDB123@kevma.qg2z2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const uriDev = 'mongodb://localhost/kevma-db'

const config: TConfig = {
  PORT: process.env.PORT || 3500,
  DB: {
    URI: uriDev
  }
}

export default config