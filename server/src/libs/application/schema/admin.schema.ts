import mongoose, { Schema } from "mongoose"

const AdminSchema = new Schema({
    name: String,
    password: String,
})

const admin = mongoose.model('Admin', AdminSchema)
export default admin