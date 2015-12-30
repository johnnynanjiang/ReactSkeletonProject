var express = require('express');
var app = express();

app.use(express.static(__dirname));


var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("running on http://localhost:8081/index.html");
});
