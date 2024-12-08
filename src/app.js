import {游戏公告出现, 游戏公告消失} from './ui.js'
import {createClouds, firstcreateClouds, morecreateClouds} from './animation.js'


setTimeout(() => {
    游戏公告出现()
}, 500);

const 游戏公告_close = document.querySelector('.游戏公告_close')
游戏公告_close.addEventListener('click', () => {
    游戏公告消失()
})


firstcreateClouds(5);
createClouds(5);

// 定时器：每5秒生成5个云朵
setInterval(() => {
    morecreateClouds(1); // 每5秒生成5个云朵
}, 4000); // 时间间隔为5000毫秒（5秒）
