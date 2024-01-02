import { Request, Response } from "express"

export = (dependency: any) => {
    const editUser = async (
        req: Request,
        res: Response
    ) => {
        const { useCases: { UserUsecase } } = dependency
        
        const {
            id,
            name,
            email,
            password
        } = req.body
        
        const user = new UserUsecase(dependency)
        const rus = await user.editUser(id, {
            name: name,
            email: email,
            password: password
        })

        if(rus) {
            res.json({msg: 'user_update'})
        }
    }
    
    return editUser
}