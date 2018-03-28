import React from 'react'

const Component = ({char, fontFamily}) => (
  <span style={{
    margin: 100,
    padding: 100,
    fontSize: 1000,
    background: 'white',
    fontFamily
  }}>
    {` ${char}`}
  </span>
)

export default Component 