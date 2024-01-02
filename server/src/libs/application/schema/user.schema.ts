import mongoose, { Schema, Document } from "mongoose"

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    image: String
})

const User = mongoose.model('User', UserSchema)
export default User
