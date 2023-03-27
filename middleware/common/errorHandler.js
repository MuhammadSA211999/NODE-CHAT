const createError = require('http-errors')
const notFoundHandler = (req, res, next) => {
    next(createError(404, 'Your requested route not found'))
}
const errorHandler = (req, res, next) => {
    res.locals.title = 'Error page'
    res.render('error.ejs')
}

module.exports = { notFoundHandler, errorHandler }