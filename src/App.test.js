import React from 'react';
const repng = require('repng')

const Component = ({char}) => (<span style={{ fontSize: 300, background: 'white' }}>{char}</span>)

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
