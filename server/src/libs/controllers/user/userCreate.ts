import { Request, Response } from "express"

export = (dependency: any) => {
    const createUser = async (
        req: Request,
        res: Response
    ) => {
        const {
            useCases: { UserUsecase },
            auth: { validationResult }
        } = dependency
    
        const error = validationResult(req)
        
        const { name, email, password, rpass } = req.body

        const user = new UserUsecase(dependency)

        if(error.errors.length <= 0) {
            if(password === rpass) {
                const exists = await user.checkUserExists(email)

                if(exists === null) {
                    const result = await user.createUser(name, email, password)
                    res.json({msg: 'user_created'})
                    
                } else {
                    res.json({msg: 'user_exist'})
                }

            }
        } else {
            const result = user.signinAuth(error.errors)
            res.json({msg: 'invalid_inputs', data: result})
        }
        // user.createUser(name, email, password)
        
        // res.json({msg: 'user_created'})
    }
    
    return createUser
}