const mongoose = require('mongoose');

const searchLogSchema = new mongoose.Schema({

    keyword: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('search_log',searchLogSchema)