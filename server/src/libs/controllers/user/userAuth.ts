import { Request, Response } from "express"

export = (dependency: any) => {
    const authUser = async (
        req: Request,
        res: Response
    ) => {
        const { useCases: { UserUsecase } } = dependency
        const { token } = req.query

        const user = new UserUsecase(dependency)
        const _token = await user.createUserAuth(token)

        res.json({id: _token})
    }
    
    return authUser
}