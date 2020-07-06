import '@/assets/css/style.css'
import '@/assets/css/style.scss'
import img from '@/assets/images/1.jpg'
import {foo, bar} from '@/utils/fetch.js'

console.log('img',img)
foo()
bar()
console.log('我是入口文件')

document.getElementById('main').style.color = "red"