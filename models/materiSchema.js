import mongoose from "mongoose";
const {Schema} = mongoose

// question model
const materiModel = new Schema({
    materi : {type : Array, default : []},
    createdAt : {type : Date, default: Date.now},
})

export default mongoose.model('materi', materiModel)