http = require('http');
fs = require('fs');
shell = require('shelljs');
server = http.createServer(function(req, res) {

    console.dir(req.param);

    if (req.method == 'POST') {
        console.log("POST");
        var body = '';
        req.on('data', function(data) {
            body += data;
            console.log("Partial body: " + body);
        });
        req.on('end', function() {
            console.log("Body: " + body);
        });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('post received');
        shell.exec('~/Mipow-Playbulb-BTL201/mipow.exp night color 0 255 0 0')
    }

});

port = 9000;
host = '127.0.0.1';
server.listen(port);
console.log('Listening at http://' + host + ':' + port);
