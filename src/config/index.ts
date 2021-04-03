import dotenv from 'dotenv'
dotenv.config()

type TConfig = {
  PORT: string | number,
  DB: {
    URI: string
  }
}

const uri: string = 'mongodb+srv://kevma:kevmaDB123@kevma.qg2z2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const config: TConfig = {
  PORT: process.env.PORT || 3500,
  DB: {
    URI: uri
  }
}

export default config