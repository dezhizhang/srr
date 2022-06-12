import React from 'react';
import {
  renderToString
} from 'react-dom/server';
const express = require('express');

const app = express();
app.get('*', (req, res) => {
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
            hello 
        </body>
     </html>
    `
  )
});

app.listen(3000,()=>console.log('server started on port:3000') )
