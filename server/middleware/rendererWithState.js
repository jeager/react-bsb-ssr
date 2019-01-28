import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../../src/App';

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end()
    }

    // ReactDOMServer is our renderer and should be used in the server context (really?)
    const html = ReactDOMServer.renderToString(<App initialProps={{count: 10}}/>);

    // Remove our root and insert our server compiled html
    console.log(html)
    return res.send(
      htmlData
        .replace(
          '<div id="root"></div>',
          `<div id="root">${html}</div>`
        )
        .replace('__STATE__={}', `__STATE__=${JSON.stringify({count: 10})}`)
    );
  });
}


