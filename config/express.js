const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  // MIDDLEWARES
  app.use(bodyParser.json());

  require('../api/routes/TokenRoute')(app);

  /*app.listen(controller.PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });*/
  //var port = process.env.PORT || 8080;
  //app.listen(port);


  return app;
};