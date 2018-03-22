http = require('http');
fs = require('fs');
shell = require('shelljs');
server = http.createServer(function(req, res) {
    let body = [];
    req.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body);
        if (body){            
            shell.exec('~/Mipow-Playbulb-BTL201/mipow.exp night '+ body)
        }else{
            shell.exec('~/Mipow-Playbulb-BTL201/mipow.exp night toggle')
        }  
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('post received');
    });
});

port = 9000;
host = '127.0.0.1';
server.listen(port);
console.log('Listening at http://' + host + ':' + port);
