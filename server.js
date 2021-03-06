const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();
// app.use(serveStatic(__dirname));
app.use(serveStatic(path.join(__dirname, 'dist')));

const port = process.env.PORT || 5000;
app.listen(port);
/* eslint-disable no-console */
console.log(`server started ${port}`);
