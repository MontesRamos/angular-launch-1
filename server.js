const express = require('express');
const app = express();

app.use(express.static('./dist/'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: 'dist/angular-launch-1/' });
});

app.listen(process.env.PORT || 8080);