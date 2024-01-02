import { User } from "../domain/user.domain";

export class UserUsecase extends User {
    constructor(private dependency: any) {
        super()
    }

    async loginUser(username: string, password: string) {
        const { repository: { userRepository : {
            loginUser
        } } } = this.dependency
        
        const res = await loginUser(username, password)
        return res
    }       
    
    loginAuth(error: any) {
        const data = error.map((data : any) => {
            return data.path
        })

        return data
    }

    signinAuth(error: any) {
        const data = error.map((data : any) => {
            return data.path
        })

        return data
    }

    logoutUser() {
        
    }
    
    createUser(name: string, email: string, password: string) {
        const { repository: { userRepository : {
            createUser
        } } } = this.dependency
        
        const obj = {
            name: name,
            email: email,
            password: password
        }
        
        createUser(obj)
        
        return 'lwal'
    }
    
    async editUser(id: string, data: object) {
        const { repository: { userRepository : {
            editUser
        } } } = this.dependency

        const update = await editUser(id, data)

        return update
    }

    deleteUser() {}

    createUserAuth(value : string) {
        const { auth: { jwt } } = this.dependency
        
        const token = jwt.verify(value, 'SECREAT')

        return token
    }

    async setUserImage(id: string, image: string) {
        const { repository: { userRepository : {
            setImage
        } } } = this.dependency

        const up = await setImage(id, image)

        return up
    }

    async checkUserExists(email: string) {
        const {
            repository: { userRepository : {
                getUserByEmail
            } }
        } = this.dependency

        const get = await getUserByEmail(email)

        return get
    }
}