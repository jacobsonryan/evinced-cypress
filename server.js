const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000
const fs = require('fs')
const path = require('path')

let fileNames = fs.readdirSync('./')
let counter = 0

app.use(cors())
fileNames.forEach(file => {
	if(file.match(/\.[json]+$/i) && file.startsWith('Report')) {
		let parsedFile = path.parse(file).name
		const sentFile = require('./' + file)
		app.get(`/${parsedFile}`, (req, res) => {
			res.send(sentFile)
		})
		counter++
	}
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`)
	console.log(`${counter} file(s) being sent.`)
}) 
