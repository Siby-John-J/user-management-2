

export abstract class Admin {

    abstract loginAdmin(email: string, password: string) : boolean

    abstract logoutAdmin() : any

    abstract deleteUsr(id: string) : any
}