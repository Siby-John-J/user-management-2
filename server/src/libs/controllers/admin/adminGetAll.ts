import { Request, Response } from "express"

export = (dependency: any) => {
    const logoutAdmin = async (
        req: Request,
        res: Response
    ) => {
        const {
            useCases: { AdminUsecase }
        } = dependency

        const all = new AdminUsecase(dependency)
        const data = await all.getAllUsers()
        
        res.json({data: data})

    }

    return logoutAdmin
}