

export interface CreateUser {
    name: string
    email: string,
    password: string
}

export abstract class User {
    
    abstract createUser(name: string, email: string, password: string) : any
    
    abstract editUser(name: string, data: object) : any

    abstract deleteUser() : any

    abstract loginUser(username: string, password: string) : any

    abstract logoutUser() : any

    abstract loginAuth(error: any) : any

    abstract createUserAuth(value: string) : any

    abstract signinAuth(error: any) : any

    abstract checkUserExists(email: string) : any
}
