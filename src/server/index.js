var path = require('path')
const express = require('express')

const dotenv = require('dotenv')
dotenv.config()

const app = express()

var cors = require('cors')
app.use(cors())

var bodyParser = require('body-parser')
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})

const apiKey = process.env.API_KEY
app.get('/key', (req, res)=> {
    res.send(apiKey)
})

const nlpData = []
//POST route adding incoming data
app.post('/addNlp', addNlp) 
function addNlp(req, res) {
    newEntry = {
	agreement: req.body.agreement,
	confidence: req.body.confidence,
	subjectivity: req.body.subjectivity,
    irony: req.body.irony
    }
    nlpData.push(newEntry)
    console.log(nlpData)
 }

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(8088, function () {
    console.log('App listening on port 8088!')
})