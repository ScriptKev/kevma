import 'source-map-support'
import 'module-alias'
import server from './server'
import './db/connection'

server.listen(server.get('port'), () => {
  console.log('Server on port', server.get('port'))
})