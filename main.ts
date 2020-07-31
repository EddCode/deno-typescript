import { App  } from './deps.ts'
import api from './routes.ts'

const env = Deno.env.toObject()
const PORT = parseInt(env.PORT) || 3000
const app = new App()

app.use('/', api)

app.listen({ port: PORT })

console.log(`server running on port ${PORT}`)
