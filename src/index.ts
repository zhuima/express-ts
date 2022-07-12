import express from 'express'
const app = express()

app.use(express.json())

app.get('/api/ping', (_req, res) => {
  console.log('just a ping test api endpoint')

  res.send('pong')
})

const PORT = 3002
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
