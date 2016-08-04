var express = require('express');

let app = new express();

app.get('/', function (req, res) {
    res.send("Hello World");
});

let server = app.listen(8081, function () {
    let host = server.address().address;
    var port = server.address().port
    console.info("应用实例，访问地址为 http://%s:%s", host, port)
});
