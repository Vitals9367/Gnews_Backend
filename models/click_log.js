const mongoose = require('mongoose');

const clickLogSchema = new mongoose.Schema({

    article: {
        title: { type: String, required: true },
        description: { type: String, required: true },
        url: { type: String, required: true },
        image: { type: String, required: true },
        publishedAt: { type: Date, required: true },
    },
    clicked_date:{
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('click_log',clickLogSchema)