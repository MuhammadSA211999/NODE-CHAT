const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')
const cookieParser = require('cookie-parser')
const { notFoundHandler, errorHandler } = require('./middleware/common/errorHandler')
dotenv.config()
const PORT = process.env.NODE_CHAT_PORT
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
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')


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


//not foundHandler
app.use(notFoundHandler)
//whole app errorhandler
app.use(errorHandler)

//listen the app
app.listen(PORT, () => {
    console.log(`NODE CHAT IS SUCCESSFULLY RUNNING IN ${PORT} PORT`);

})
