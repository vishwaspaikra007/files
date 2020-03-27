const express = require('express')
const index = require('./routes/index')
const path = require('path')
const app = express()

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')))
app.use(index)

const PORT = process.env.PORT || 3100
app.listen(PORT, ()=> {
    console.log("app is listening on port " + PORT)
})
