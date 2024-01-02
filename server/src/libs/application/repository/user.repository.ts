import { User } from "../schema"

export = {
    createUser: async(data: any) => {
        const create = await User.insertMany([{
            name: data.name,
            email: data.email,
            password: data.password
        }])
        return create
    },

    editUser: async(id: string, data: any) => {
        const edit = await User.findOneAndUpdate({
            _id: id,
        }, {
            name: data.name,
            email: data.email,
            password: data.password
        })
        
        return edit
    },

    loginUser: async(username: string, password: string) => {
        const login = await User.findOne({
            email: username,
            password: password
        })

        return login
    },
    
    getUser: async(id: string) => {
        const get = await User.findById({
            _id: id
        })
        
        // console.log(get)
        
        return get
    },

    getUserByEmail: async(email: string) => {
        const get = await User.findOne({
            email: email
        })
        
        return get
    },

    setImage: async(id: string, image: string) => {
        const update = await User.findOneAndUpdate(
            { _id: id },
            { image: image }
        )
        
        return update
    },

    getAllUser:async () => {
        const result = await User.find()

        return result
    },
    
    deleteUser:async (id: string) => {
        const del = await User.deleteOne({_id: id})

        return del
    }
}
