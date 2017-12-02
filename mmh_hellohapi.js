let hapi = require("hapi");
let server = new hapi.Server();
server.connection({
    host: 'localhost',
    port: Number(process.argv[2]||8080)
});

server.route({
    path: '/',
    method: 'GET',
    handler: handler
});

function handler(request,reply){
    reply("Hello hapi");
}

server.start(function()
{
    
    console.log('Server running at:', server.info.uri);
});