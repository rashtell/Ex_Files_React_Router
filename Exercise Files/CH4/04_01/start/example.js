import { createServer } from 'http'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'

// ----------- SERVER ------------ //
createServer((req, res) => {
  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App/>
    </StaticRouter>
  )

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    res.write(`
      <!doctype html>
      <div id="app">${html}</div>
    `)
    res.end()
  }
}).listen(3000)

// ----------- APP.JS ------------ //

import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('app'))



// ------ SOMEWHERE IN YOUR APPLICATION ---- //

import { matchPath } from 'react-router-dom'

// inside a request
const promises = []
// use `some` to imitate `<Switch>` behavior of selecting only
// the first to match
routes.some(route => {
  // use `matchPath` here
  const match = matchPath(req.path, route)
  if (match)
    promises.push(route.loadData(match))
  return match
})

Promise.all(promises).then(data => {
  // do something w/ the data so the client
  // can access it then render the app
})
