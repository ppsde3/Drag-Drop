const express = require("express");
const serveIndex = require('serve-index')
const app = express();
const initRoutes = require("./routes/web");

app.use(express.urlencoded({ extended: true }));

app.use('/ftp', express.static('upload'), serveIndex('upload', {'icons': true}));

initRoutes(app);

let port = 3000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
