const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Simple API',
    description: 'Learning Swagger AutoGen'
  },
  host: 'localhost:3000',
  schemes: ['http']
};

const outputFile = './swagger-output.json';
const routes = ['./index.js'];

swaggerAutogen(outputFile, routes, doc);