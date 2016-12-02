var express = require('express')
var app = express()

app.get('/', function (reg, res) {
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
// This app starts a server and listens on Port 3000 for connections. The app responds with "Hello World!" for reg.on('data', callback), and anything else you would do without Express involved.
// Run the app with the following command: "$ node app.js"
// Then, load http://localhost:3000/ in a browser to see the output.