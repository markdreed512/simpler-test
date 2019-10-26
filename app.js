const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
})
app.get('/:words', function(req, ses){
    console.log(req.params.words)
})


app.listen(3000, function(){
    console.log("listening on port 3000!!")
})

