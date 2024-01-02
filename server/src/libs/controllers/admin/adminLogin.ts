import { Request, Response } from "express"

export = (dependency: any) => {
    const loginAdmin = (
        req: Request,
        res: Response
    ) => {

        const {
             useCases: { AdminUsecase },
             auth: { validationResult }
            } = dependency

        const { email, password } = req.body

        const error = validationResult(req)

        const admin = new AdminUsecase()
        const result = admin.loginAdmin(email, password)
        
        if(error.errors.length > 0) {
            res.json({res: result})
        } else {
            res.json({res: 'error'})
        }
    }

    return loginAdmin
}
