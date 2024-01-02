import { Admin } from "../domain/admin.domain"

export class AdminUsecase extends Admin {
    constructor(private dependency: any) {
        super()
    }

    loginAdmin(email: string, password: string) {
        const cred = {
            email: 'admin@gmail.com',
            password: 'password123'
        }

        if(email === cred.email && password === cred.password) {
            return true
        } else {
            return false
        }
    }

    logoutAdmin() {
        
    }

    async getAllUsers() {
        const { repository: { userRepository : {
            getAllUser
        } } } = this.dependency

        const res = await getAllUser()

        return res
    }

    async deleteUsr(id: string) {
        const { repository: { userRepository : {
            deleteUser
        } } } = this.dependency

        const del = await deleteUser(id)
        
        return del
    }
}