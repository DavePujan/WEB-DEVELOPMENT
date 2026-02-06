const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const app = express();
app.use(express.json());

require('./routes')(app);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3000, async () => {
  console.log("Server running on http://localhost:3000");

  // Generate swagger file before serving docs
  await require('./swagger');
});
