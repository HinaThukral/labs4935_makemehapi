var Fs = require('fs');
var hapi = require('hapi');
var Path = require('path');
var Rot13 = require('rot13-transform');

var server = new hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    method: 'GET',
    path: '/',
    config: {
        handler: (request, reply) => {
            var thisfile = Fs.createReadStream(Path.join(__dirname, 'input.txt'));
            reply(thisfile.pipe(Rot13()));
        }
    }
});

server.start(function(){
    console.log('Server running at:',server.info.uri);
});