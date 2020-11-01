import express from 'express'
import Home from './pages/Home'
import React from 'react'
import { renderToString } from 'react-dom/server';
const content =  renderToString(<Home />)
const app =  express()

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.send(
      `<html>
          <head>
              <title>SSR</title>
          </head>
          <body>
    <div id='root'>${content}</div>
    <script src='/index.js'></script>
          </body>
      </html>`
    )
})

app.listen(3000)