const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const http = require('http');
const { cards } = require('./cards');
const { OpenApiValidator } = require('express-openapi-validator');

const port = 3005;
const app = express();
const apiSpec = path.join(__dirname, 'api.yaml');

// 1. Install bodyParsers for the request types your API will support
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/spec', express.static(apiSpec));
app.use(cors());

//  2. Install the OpenApiValidator on your express app
new OpenApiValidator({
  apiSpec,
  validateResponses: true,
})
  .install(app)
  .then(() => {
    // 3. Add routes
    app.get('/v1/cards', function (req, res, next) {
      res.json(cards.findAll(req.query));
    });

    app.post('/v1/cards', function (req, res, next) {
      res.json(cards.add({ ...req.body }));
    });

    // 4. Create a custom error handler
    app.use((err, req, res, next) => {
      // format errors
      res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors || [],
      });
    });

    http.createServer(app).listen(port);
    console.log(`Listening on port ${port}`);
  });

module.exports = app;
