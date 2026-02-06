module.exports = (app) => {

  app.get('/users', (req, res) => {
    // #swagger.tags = ['Users']
    res.json([
      { id: 1, name: "Pujan" },
      { id: 2, name: "Alex" }
    ]);
  });

  app.post('/users', (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.parameters['body'] = {
    //   in: 'body',
    //   schema: { name: "John" }
    // }

    const { name } = req.body;
    res.json({ message: `User ${name} created` });
  });

};
