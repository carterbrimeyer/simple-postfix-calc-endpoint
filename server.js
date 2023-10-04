'use strict';

const Hapi = require('@hapi/hapi');

const { Calculator } = require('./postfix-calculator');

var calc = new Calculator();


const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'POST',
        path: '/',
        handler: (request, h) => {
            console.log(request.payload.input);
            
            return calc.evaluate(request.payload.input);
        }
    });
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();