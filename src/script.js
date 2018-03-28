require('babel-register')({
  plugins: [
    'babel-plugin-transform-async-to-generator',
    'babel-plugin-transform-runtime'
  ].map(require.resolve),
  presets: [
    'babel-preset-env',
    'babel-preset-stage-0',
    'babel-preset-react'
  ].map(require.resolve)
})

const React = require('react')
const repng = require('repng')
const Component = require('./Component').default



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
  'csprajad',
  'sathu',
  'silom',
  'krungthep',
  'thonburi',
]

const generator = () => {
  console.time()
  for (let fontFamily of fontList) {
    for (let char of charList) {
      const options = {
        props: { char, fontFamily },
        outDir: `./image/${fontFamily}`,
        filename: `font_${fontFamily}_char_${char}`,
      }
      repng(Component, options)
    }
  }
  console.timeEnd()
}

const fn = async () => {
  await generator()
}

fn()

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
      <body style="padding-top: 200px;">
        ${markup}
      </body>
    </html>
  ` 

  // comment =>  crop: true
  const opts = Object.assign({
    width: 1024,
    height: 768,
    // crop: true,
    scale: 1,
  }, _options, {
    css: defaultCss + css,
    filename: filename || defaultFilename
  })
*/