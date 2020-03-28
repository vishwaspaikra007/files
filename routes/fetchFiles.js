const express = require('express')
const router = express() 

const fs = require('fs')
const path = require('path')

router.get('/fetchFiles', (req, res) => {
    const directoryPath = path.join(__dirname, '..','public', 'uploads')
    let filesName  = [];
    fs.readdir(directoryPath, function(err, files) {
        if(err) {
            return console.log('Unable to scan directory: ' + err);
        }
        files.forEach(file => {
            filesName.push(file);
        })
        res.status(201).send(filesName)
    })
})

module.exports = router