const mongoose = require('mongoose')

const configureDb = async () => {
    try {
        const db = await mongoose.connect('mongodb://127.0.0.1:27017/port-folio-project')
        console.log('connected to db')
    } catch(e) {
        console.log('error connecting to db')
    }
}

module.exports = configureDb 