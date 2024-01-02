import { Request, Response } from "express"

export = (dependency: any) => {
    const logoutUser = (
        req: Request,
        res: Response
    ) => {

        res.clearCookie('token')

        res.json({msg: 'cookies'})

    }

    return logoutUser
}