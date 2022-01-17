const express = require('express')
const app = express()
//const report = require('./Report.json')
const cors = require('cors')
const PORT = 3000
const fs = require('fs')

let fileNames = fs.readdirSync('./')

fileNames.forEach(file => {
	if(file.match(/\.[json]+$/i)) {

	console.log(file)
	}
})

app.use(cors())

//app.get('/', (req, res) => {
//	res.send(report)
//})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
}) 
