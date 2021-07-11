var app = require('./server').app;
var User = require('./server').User;
var port = 3000;

app.get('/users', (req, res) => {
  User.findAll().then((users) => {
    res.json(users);
  });
});

User.sync({ force: true })
  .then(function () {
    console.log('Users table created');
    return User.create({ username: 'zlester' });
  })
  .then(function() {
    console.log('Seeded User table');
    app.listen(port, function() {
      console.log('node-express-sequelize listening on ' + port);
    });
  });
