import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
    title: String,
    description: String,
    email: String,
    role: String
    // feedback: String,
    // address: String,
    // foodReviewedName: String,
    // foodReviewedPhoto: String
})

const Users = models.user || model('user', userSchema)
export default Users; 