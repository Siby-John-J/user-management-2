import { Request, Response } from "express"

export = (dependency: any) => {
    const getUser = (
        req: Request,
        res: Response
    ) => {
        const { useCases: { UserUsecase } } = dependency
        
        const user = new UserUsecase(dependency)

        user.setUserImage(req.query.id, req.file?.originalname)
        // user.editUser('name')
    }
    
    return getUser
}