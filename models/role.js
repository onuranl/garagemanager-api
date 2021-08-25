const mongoose = require('mongoose')

const RolesSchema = new mongoose.Schema({
    type: { type: String, unique: true, required: true }
})

module.exports = mongoose.model('roles', RolesSchema)
