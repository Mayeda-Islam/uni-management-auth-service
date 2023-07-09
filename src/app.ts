import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from '../src/app/modules/users/user.route'
const app: Application = express()
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', userRouter)

export default app
