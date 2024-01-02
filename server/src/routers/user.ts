import express from 'express'
import { user } from '../libs/controllers/index'

export = (dependency: any) => {
    const router = express.Router()

    const { 
        user_login,
        user_logout,
        user_create,
        user_edit,
        set_token,
        user_get,
        user_auth,
        get_user
    } = user(dependency)
    
    const { auth: { signInValidation, signUpnValidation, multer, jwt } } = dependency
    
    router.post('/login', signInValidation, user_login)
    router.get('/logout', user_logout)
    router.post('/create' , signUpnValidation, user_create)
    router.post('/set_token', set_token)
    router.patch('/image', multer.single('file'), user_get)
    router.get('/auth', user_auth)
    router.patch('/edit', user_edit)
    router.post('/get', get_user)

    return router
}