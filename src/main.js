// import TS from './ts/index.ts'
import { cube } from '@src/treeShaking'

import('@src/ts/index.ts').then(res => {
  console.log(res)
  // eslint-disable-next-line new-cap
  new res.default()
})
require('./style/index.css')
require('./style/app.css')
require('./style/index.less')
require('./style/index.scss')
import('./style/index.postcss')
require('react')

console.log(cube(2))

const h2 = document.createElement('h2')
h2.className = 'test'
h2.innerText = 'testaaa'
document.body.append(h2)
