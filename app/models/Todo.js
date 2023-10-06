const {Schema, model, Types} = require("mongoose");

const todoSchema = new Schema({
    Task: {
        type: String,
        required: true,
    },
    Completed: {
        type: Boolean,
        default:false,
        required: true,
    },
    CompletedTime: {
        type: Date,
    },
    CreationTime: {
        type: Date,
        required: true,
        default: Date.now(),
    },
})


const Todo = model("Todo", todoSchema);

module.exports = Todo;