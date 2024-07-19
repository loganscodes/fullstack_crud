import express from 'express'
import {routerBlog, routerUser} from './routes/routes.js'
import cors from 'cors'
import db from './database/db.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/blogs', routerBlog)
app.use('/auth', routerUser)

try {
    await db.authenticate()
    console.log('conexion exitosa a db')
} catch (error) {
    console.log('error de conexion', error)
}

app.get('/', (req, res) => {
    res.send('Hola mundo express')
})

app.listen(8000, () => {
    console.log('running on port 8000')
})