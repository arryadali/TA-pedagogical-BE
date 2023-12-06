import mongoose from "mongoose";
const {Schema} = mongoose

const likertModel = new Schema({
    userId: {
        type: String,
        required: true
    },
    questionId: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    createdAt : {type : Date, default: Date.now},
})

export default mongoose.model('likert', likertModel)