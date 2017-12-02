let Hapi = require('hapi');
let Vision = require('vision');
let Path = require('path');

let server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(Vision, (err) => {
    if (err) console.log(err);
});

server.views({
    engines: {
        html: require('handlebars')
    },
    path: Path.join(__dirname, 'templates')
});

server.route({
    method: 'GET',
    path: '/',
    handler: {
        view: 'index.html'
    }
});

server.start((err) => {
    if (err) console.log(err);
});