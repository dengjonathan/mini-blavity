const express = require('express');
const bodyParser = require('body-parse');

const db = require('./db/config');

// var User = require('./app/models/user');
// var Links = require('./app/collections/links');
// var Link = require('./app/models/link');
// var Click = require('./app/models/click');

const app = express();
const PORT = process.ENV.PORT || 8080;

// Parse JSON (uniform resource locators)
app.use(bodyParser.json());

app.get('/products/machines', (req, res) => {
  // fetch all products
  res.render('index');
});

app.get('/create', util.checkUser, function(req, res) {
  res.render('index');
});

app.get('/links', util.checkUser, function(req, res) {
  Links.reset().fetch().then(function(links) {
    res.status(200).send(links.models);
  });
});

app.get('/*', function(req, res) {
  new Link({ code: req.params[0] }).fetch().then(function(link) {
    if (!link) {
      res.redirect('/');
    } else {
      var click = new Click({
        linkId: link.get('id')
      });

      click.save().then(function() {
        link.set('visits', link.get('visits') + 1);
        link.save().then(function() {
          return res.redirect(link.get('url'));
        });
      });
    }
  });
});

app.listen(PORT);
console.log(`Coffee Server is listening on ${PORT}`);

