const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    title: {
        type: String,
        // required: true
    },
    body: {
        type: String,
        // required: true
    },
    asker: {
        type: Object,
        // required: true
    },
    answers: {
        type: Array,
        //  required: false
    }
}, )

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;