import express from 'express'
import { router } from './routers'
import dependency from './config/dependency'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { connectDb } from './config/db'

const app = express()

connectDb()

const corsOptions = {
    origin:'http://localhost:5173', 
    credentials:true
}

app.use('/images', express.static('src/public/images'))

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))

app.use(router(dependency))

app.listen(2000)
