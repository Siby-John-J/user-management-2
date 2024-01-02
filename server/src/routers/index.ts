import express from 'express'
import admin from './admin'
import user from './user'

export const router = (dependency: any) => {
    const route = express.Router()

    route.use('/user', user(dependency))
    route.use('/admin', admin(dependency))

    return route
}