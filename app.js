const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('hello muthafaka')
})

app.listen(3005, console.log('server successfully launched at 3005 port'))
