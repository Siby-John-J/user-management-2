import { Request, Response } from "express"

export = (dependency: any) => {
    const deleteUser = async (
        req: Request,
        res: Response
    ) => {
       const { useCases : { AdminUsecase } } = dependency

       const { id } = req.body
       
       const del = new AdminUsecase(dependency)
       const delet = await del.deleteUsr(id)

       res.json({msg: 'ok'})
    }

    return deleteUser
}