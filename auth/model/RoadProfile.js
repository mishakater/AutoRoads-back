const mongoose = require('mongoose');

const roadProfileSchema = new mongoose.Schema({
    roadName: {
        type: String,
        required: true,
        max: 255
    },
    region: {
        type: String,
        required: true,
        max: 255
    },
    direction: {
        type: String,
        required: true,
        max: 255
    },
    length: {
        type: String,
        required: true,
        max: 1000000
    }
   /* date: {
        type: Date,
        default: Date.now
    }*/
});

module.exports = mongoose.model('RoadProfile', roadProfileSchema);