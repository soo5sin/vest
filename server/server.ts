const jsonServer = require('json-server')
const auth = require('json-server-auth')
const app = jsonServer.create()
const cors = require('cors')
const router = jsonServer.router('db.json')

app.db = router.db
const rules = auth.rewriter({
  users: 660,
  accounts: 660,
})

app.use((req: any, res: any, next: any) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  next()
})

const corsOption = {
  credentials: true,
}

app.use(cors(corsOption))
app.use(rules)
app.use(auth)
app.use(router)

app.listen(4000, () => {
  console.log('JSON Server is running...')
})
