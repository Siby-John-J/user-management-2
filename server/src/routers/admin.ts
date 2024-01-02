import express from 'express'
import { admin, user } from '../libs/controllers'

export = (dependency: any) => {
    const router = express.Router()
    
    const {
        admin_login,
        admin_logout,
        getall_user
    } = admin(dependency)

    const {
        user_create,
        user_edit,
        user_delete
    } = user(dependency)

    // const {
    //     auth : { signInValidation }+
    // } = user(dependency)

    const { auth: { signInValidation } } = dependency

    router.post('/login', signInValidation, admin_login)
    router.get('/logout', admin_logout)
    router.post('/create', user_create)
    router.patch('/edit', user_edit)
    router.delete('/delete', user_delete)
    router.get('/getall', getall_user)

    return router
}