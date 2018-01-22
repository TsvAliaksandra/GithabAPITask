const fs = require('fs');

module.exports = app => {

  app.get('*', (req, res) => {
    fs.readFile('../public/dist/index.html', (error, html) => {
      res.setHeader('Content-type', 'text/html');
      res.end(html);
    });
  });
};
