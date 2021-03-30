//A Basic Node server

const http = require('http');


const server = http.createServer(function(req, res) {
    res.setHeader('content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);


    let dataobj = { "id": 123, "name": "mahesh", "email": "saimahesh1279@gmail.com" };
    let data = JSON.stringify(dataobj);
    res.end(data);

});



server.listen(1234, function() {
    console.log('listening on port 1234');
});
