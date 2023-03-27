const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

/*
******REQUIREMENT ANALYSIS*****
1. It would be a private CHAT-APP
2.There are two diffrent rule will implemented
3. ADMIN and general USER 
4.USER CAN LOGINN BUT CAN'N CREATE A ACCOUNT, ADMIN CAN CREATE THE USER AND START A CONVERSATION.
5. REQUEST VALIDATING WITH EXPRESS VALIDATOR
6. SERVER SIDE RENDERING BY EJS 
7. COOKIE AUTHENTICATION BY JWT
8. WEB SOCKET FOR REALTIME UPDATE AND NOTIFICATION
*/

//apppppp scaffolding
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
