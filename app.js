import express from 'express'
import router from './routes'
import cors from 'cors'

const app = express();

app.use(cors())

app.use('/api', router)

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})

export {}
