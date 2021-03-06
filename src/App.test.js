import React from 'react';
const repng = require('repng')

const Component = ({char, fontFamily}) => (<span style={{ fontSize: 1000, background: 'white', fontFamily }}>{char}</span>)

const char = `ก	ข	ฃ	ค	ฅ	ฆ	ง	จ	ฉ	ช	ซ	ฌ	ญ	ฎ	ฏ	ฐ	ฑ	ฒ	ณ	ด	ต	ถ	ท	ธ	น	บ	ป	ผ	ฝ	พ	ฟ	ภ	ม	ย	ร	ล	ว	ศ	ษ	ส	ห	ฬ	อ	ฮ`
const charList = [
  'ก', 'ข', 'ฃ', 'ค', 'ฅ', 'ฆ', 'ง', 'จ', 'ฉ', 'ช',
  'ซ', 'ฌ', 'ญ', 'ฎ', 'ฏ', 'ฐ', 'ฑ', 'ฒ', 'ณ', 'ด',
  'ต', 'ถ', 'ท', 'ธ', 'น', 'บ', 'ป', 'ผ', 'ฝ', 'พ',
  'ฟ', 'ภ', 'ม', 'ย', 'ร', 'ล', 'ว', 'ศ', 'ษ', 'ส',
  'ห', 'ฬ', 'อ', 'ฮ',
]
const fontList = [
  'superstore',
]
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

it('renders without crashing', async () => {

  for (let fontFamily of fontList) {
    for (let char of charList) {
      const options = {
        props: { char, fontFamily },
        outDir: `./image/${fontFamily}`,
        filename: `font_${fontFamily}_char_${char}`,
      }
    
      const result = await repng(Component, options)
      
      await result.then(streams => {
        console.log(`font_${fontFamily}_char_${char}`)
      })
    }
  }
});
