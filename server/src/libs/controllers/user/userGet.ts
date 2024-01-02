import { Request, Response } from "express"

export = (dependency: any) => {
    const getUser = async (
        req: Request,
        res: Response
    ) => {
        const { id } = req.body

        let user = null
        
        const { repository: { userRepository:  { getUser } } } = dependency

        try {
            user = await getUser(id)
        } catch (error: any) {
            console.log(error.message)
        }
        
        res.json({data: user})
    }

    return getUser
}