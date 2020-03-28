const express = require('express')
const upload = require('./routes/upload')
const fetchFiles = require('./routes/fetchFiles')
const path = require('path')
const app = express()

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')))
app.use(upload)
app.use(fetchFiles)

const PORT = process.env.PORT || 3100
app.listen(PORT, ()=> {
    console.log("app is listening on port " + PORT)
})
