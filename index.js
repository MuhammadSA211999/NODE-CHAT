const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
//apppppp
const app = express()

//dependencies
app.use(express.json())
app.use(cors())
const PORT = process.env.NODE_CHAT_PORT


//connect the database
mongoose.connect(process.env.NODE_CHAT_DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('NODE-APP DATABSAE CONNECT SUCCESSFULLY');

}).catch((error) => {
    console.log('databsae connection error=>', error);

})

//APP ROUTES HERE

//whole app error handler middleware
const errorHandler = (err, req, res, next) => {
    console.log('error in error handler=>', err);
    next()
}

//use error handler
app.use(errorHandler)

//listen the app
app.listen(PORT, () => {
    console.log(`NODE CHAT IS SUCCESSFULLY RUNNING IN ${PORT} PORT`);

})
