import React from 'react';
const repng = require('repng')

const Component = ({char}) => (<span style={{ fontSize: 300, background: 'white' }}>{char}</span>)

/*
  ----------------------------------------------------------------------------------------------------------------
    Before run test change index.js of repng libs
  ----------------------------------------------------------------------------------------------------------------

  const markup = renderToStaticMarkup(h(Root, props))

  const html = `
    <!DOCTYPE html>
      <html lang="th">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Document</title>
      </head>
      <body>
        ${markup}
      </body>
    </html>
  ` 
*/

it('renders without crashing', () => {
  const options = {
    props: {
      char: 'ก',
    },
    outDir: './image',
    filename: 'testImage',
  }

  const result = repng(Component, options)
  
  result.then(streams => {
    console.log('rendered component')
  })
});
