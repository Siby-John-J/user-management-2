import { Request, Response } from "express"

export = (dependency: any) => {
    const setToken = (
        req: Request,
        res: Response
    ) => {
        const { jwt: { sign } } = dependency
        const { key } = req.body
        
        const token = sign(key)

        res.cookie('userauth', token)
    }

    return setToken
}