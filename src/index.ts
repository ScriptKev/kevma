import 'module-alias/register'
import 'source-map-support/register'
import server from '~/server'
import { connectDB } from '~/db/connection'
import { initDatabase } from '~/db'

server.listen(server.get('port'), () => {
  console.log('⚡ Server on port', server.get('port'))

  connectDB()
    .then(() => initDatabase())
    .catch((err) => console.error(err))
})