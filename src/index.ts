import express from 'express'
import diaryRouter from './routes/diaries'
const app = express()

app.use(express.json())


app.get('/', (_req, res) => {
  res.send("Hello Express")
})

app.get('/api/ping', (_req, res) => {
  console.log('just a ping test api endpoint')

  res.send('pong')
})


app.use('/api/diaries', diaryRouter)

const PORT = 3002
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
