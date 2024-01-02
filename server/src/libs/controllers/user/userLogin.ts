import { Request, Response } from "express"

export = (dependency: any) => {
    const loginUser = async(
        req: Request,
        res: Response
    ) => {

        type Data = {
            res: any
        }

        function sendRes(this: Data) {
            if(this.res !== null) {
                res.json({msg: 'user_found', id: this.res._id})
            } else {
                res.json({msg: 'no_user'})
            }
        }
        
        const { username, password } = req.body
        
        const {
                useCases: { UserUsecase },
                auth: { validationResult, jwt : { sign } }
            } = dependency

        const error = validationResult(req)
        
        const user = new UserUsecase(dependency)
        
        if(error.errors.length <= 0) {
            const result = await user.loginUser(username, password)
            if(result !== null) {
                const key = JSON.stringify(result._id)

                const token = sign(key, 'SECREAT')

                res.cookie('token', token)
            }

            sendRes.call({res: result})
        } else {
            const result = await user.loginAuth(error.errors)
            res.json({msg: 'error_auth', data: result})
        }
    }

    return loginUser
}