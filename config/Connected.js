const mongoose = require('mongoose')
    const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') }); // mochkla 3awisa

//Connect to DB
const connected = async ()=> {
    // console.log(process.env.MONGO_URI)

    // To handle initial connection errors, you should use .catch()
        try{
            // 'mongodb://localhost/restapi'
            mongoose.connect(process.env.MONGO_URI ,{ useNewUrlParser: true, useUnifiedTopology: true }) //hedhi f checkpoint w manish 3aref aleh 
            console.log('Connected to DB')
    } catch (error) {
        console.error({msg:'db is not connected',error})
    }

}

module.exports = connected