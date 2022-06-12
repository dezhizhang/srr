import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../index';

const express = require('express');

const app = express();

app.use(express.static('client'))
app.get('*', (req, res) => {
  const html = renderToString(
    <StaticRouter>
      <App/>
    </StaticRouter>
  );
  console.log(html)
  res.send(
    `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>srr</title>
        </head>
        <body>
            ${html} 
            <script src="/client.js"></script>
        </body>
     </html>
    `,
  );
});

app.listen(3000, () => console.log('server started on port:3000'));
