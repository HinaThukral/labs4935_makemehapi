let hapi = require('hapi');
let inert = require('inert');

let server = new hapi.Server();
server.connection({
   host: 'localhost',
  // host: process.env.IP,
  // port: process.env.PORT,
  // routes: {
  //       cors: true
  //   }
   port: Number(process.argv[2]) || 8080
});

server.register(inert, function (err) {
        if (err) throw err;
    });
server.route({
  path: '/',
  method: 'GET',
  handler: function (request, reply) {
            reply.file('index.html');
        }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    });