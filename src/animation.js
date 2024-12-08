function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function createClouds(numberOfClouds) {
    for (let i = 0; i < numberOfClouds; i++) {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');

         // 随机生成大小倍率（例如：0.5 到 1.5）
        const sizeMultiplier = 0.5 + (getRandomInt(1, 15)/10);


        // 随机生成高度和宽度
        const randomWidth = 110 * sizeMultiplier; // 随机宽度
        const randomHeight = 30 * sizeMultiplier; // 随机高度
        cloud.style.width = `${randomWidth}px`; // 设置随机宽度
        cloud.style.height = `${randomHeight}px`; // 设置随机高度

        // 随机生成高度位置（在0到窗口高度的范围内）
        const randomtop = Math.random() * (window.innerHeight * 0.6); // 让云朵不超过80%窗口高度
        cloud.style.position = 'absolute'; // 绝对定位
        cloud.style.top = `${randomtop}px`; // 设置随机高度

        // 随机生成水平位置，考虑到云朵的宽度
        const cloudWidth = randomWidth; // 云朵的宽度
        const windowHalfWidth = window.innerWidth / 2; // 获取窗口的右半边宽度
        const randomLeft = Math.random() * (windowHalfWidth - cloudWidth) + windowHalfWidth; // 生成随机位置，确保在右半边
        cloud.style.left = `${randomLeft}px`; // 设置随机水平位置

        // 动态创建伪元素的大小和位置
        const cloudBefore = document.createElement('div');
        cloudBefore.classList.add('cloud-before');
        const pseudoWidth = 30 * sizeMultiplier; // 伪元素宽度为云朵宽度的25%
        const pseudoHeight = 30 * sizeMultiplier; // 伪元素高度为云朵高度的25%
        cloudBefore.style.width = `${pseudoWidth}px`;
        cloudBefore.style.height = `${pseudoHeight}px`;
        cloudBefore.style.position = 'absolute';
        cloudBefore.style.left = `${randomWidth * 0.1}px`; // 根据宽度调整位置
        cloudBefore.style.top = `-${pseudoHeight / 2}px`; // 根据高度调整位置
        cloudBefore.style.backgroundColor = 'white';
        cloudBefore.style.borderRadius = '50%';
        
        // 动态创建伪元素的大小和位置
        const cloudafter = document.createElement('div');
        cloudafter.classList.add('cloud-after');
        const pseudoWidth1 = 50 * sizeMultiplier; // 伪元素宽度为云朵宽度的25%
        const pseudoHeight1 = 50 * sizeMultiplier; // 伪元素高度为云朵高度的25%
        cloudafter.style.width = `${pseudoWidth1}px`;
        cloudafter.style.height = `${pseudoHeight1}px`;
        cloudafter.style.position = 'absolute';
        cloudafter.style.left = `${37 * sizeMultiplier}px`; // 根据宽度调整位置
        cloudafter.style.top = `-${pseudoHeight }px`; // 根据高度调整位置
        cloudafter.style.backgroundColor = 'white';
        cloudafter.style.borderRadius = '50%';


        cloud.appendChild(cloudBefore); // 把伪元素添加到云朵中
        cloud.appendChild(cloudafter); // 把伪元素添加到云朵中

        document.querySelector('.背景_云朵').appendChild(cloud);

        // 设置云朵存在的时间（例如：5000毫秒，即5秒）
        setTimeout(() => {
            cloud.remove(); // 在5秒后移除云朵
        }, 80000);

    }
}


export function firstcreateClouds(numberOfClouds) {
    for (let i = 0; i < numberOfClouds; i++) {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');

         // 随机生成大小倍率（例如：0.5 到 1.5）
        const sizeMultiplier = 0.5 + (getRandomInt(1, 15)/10);


        // 随机生成高度和宽度
        const randomWidth = 110 * sizeMultiplier; // 随机宽度
        const randomHeight = 30 * sizeMultiplier; // 随机高度
        cloud.style.width = `${randomWidth}px`; // 设置随机宽度
        cloud.style.height = `${randomHeight}px`; // 设置随机高度

        // 随机生成高度位置（在0到窗口高度的范围内）
        const randomtop = Math.random() * (window.innerHeight * 0.6); // 让云朵不超过80%窗口高度
        cloud.style.position = 'absolute'; // 绝对定位
        cloud.style.top = `${randomtop}px`; // 设置随机高度

        // 随机生成水平位置，确保在左半边
        const cloudWidth = randomWidth; // 云朵的宽度
        const windowHalfWidth = window.innerWidth / 2; // 获取窗口的左半边宽度
        const randomLeft = Math.random() * (windowHalfWidth - cloudWidth); // 生成随机位置，确保在左半边
        cloud.style.left = `${randomLeft}px`; // 设置随机水平位置

        // 动态创建伪元素的大小和位置
        const cloudBefore = document.createElement('div');
        cloudBefore.classList.add('cloud-before');
        const pseudoWidth = 30 * sizeMultiplier; // 伪元素宽度为云朵宽度的25%
        const pseudoHeight = 30 * sizeMultiplier; // 伪元素高度为云朵高度的25%
        cloudBefore.style.width = `${pseudoWidth}px`;
        cloudBefore.style.height = `${pseudoHeight}px`;
        cloudBefore.style.position = 'absolute';
        cloudBefore.style.left = `${randomWidth * 0.1}px`; // 根据宽度调整位置
        cloudBefore.style.top = `-${pseudoHeight / 2}px`; // 根据高度调整位置
        cloudBefore.style.backgroundColor = 'white';
        cloudBefore.style.borderRadius = '50%';
        
        // 动态创建伪元素的大小和位置
        const cloudafter = document.createElement('div');
        cloudafter.classList.add('cloud-after');
        const pseudoWidth1 = 50 * sizeMultiplier; // 伪元素宽度为云朵宽度的25%
        const pseudoHeight1 = 50 * sizeMultiplier; // 伪元素高度为云朵高度的25%
        cloudafter.style.width = `${pseudoWidth1}px`;
        cloudafter.style.height = `${pseudoHeight1}px`;
        cloudafter.style.position = 'absolute';
        cloudafter.style.left = `${37 * sizeMultiplier}px`; // 根据宽度调整位置
        cloudafter.style.top = `-${pseudoHeight }px`; // 根据高度调整位置
        cloudafter.style.backgroundColor = 'white';
        cloudafter.style.borderRadius = '50%';



        cloud.appendChild(cloudBefore); // 把伪元素添加到云朵中
        cloud.appendChild(cloudafter); // 把伪元素添加到云朵中

        document.querySelector('.背景_云朵').appendChild(cloud);

        // 设置云朵存在的时间（例如：5000毫秒，即5秒）
        setTimeout(() => {
            cloud.remove(); // 在5秒后移除云朵
        }, 80000);

    }
}


export function morecreateClouds(numberOfClouds) {
    for (let i = 0; i < numberOfClouds; i++) {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');

         // 随机生成大小倍率（例如：0.5 到 1.5）
        const sizeMultiplier = 0.5 + (getRandomInt(1, 15)/10);


        // 随机生成高度和宽度
        const randomWidth = 110 * sizeMultiplier; // 随机宽度
        const randomHeight = 30 * sizeMultiplier; // 随机高度
        cloud.style.width = `${randomWidth}px`; // 设置随机宽度
        cloud.style.height = `${randomHeight}px`; // 设置随机高度

        // 随机生成高度位置（在0到窗口高度的范围内）
        const randomtop = Math.random() * (window.innerHeight * 0.6); // 让云朵不超过80%窗口高度
        cloud.style.position = 'absolute'; // 绝对定位
        cloud.style.top = `${randomtop}px`; // 设置随机高度

        // 随机生成水平位置，确保从右侧的30%开始
        const cloudWidth = randomWidth; // 云朵的宽度
        const rightStartPercentage = 0.7; // 定义起始位置的比例
        const windowStartX = window.innerWidth * rightStartPercentage; // 右侧30%开始的位置
        const randomLeft = Math.random() * (window.innerWidth - windowStartX - cloudWidth) + windowStartX; // 生成随机位置
        cloud.style.left = `${randomLeft}px`; // 设置随机水平位置

        // 动态创建伪元素的大小和位置
        const cloudBefore = document.createElement('div');
        cloudBefore.classList.add('cloud-before');
        const pseudoWidth = 30 * sizeMultiplier; // 伪元素宽度为云朵宽度的25%
        const pseudoHeight = 30 * sizeMultiplier; // 伪元素高度为云朵高度的25%
        cloudBefore.style.width = `${pseudoWidth}px`;
        cloudBefore.style.height = `${pseudoHeight}px`;
        cloudBefore.style.position = 'absolute';
        cloudBefore.style.left = `${randomWidth * 0.1}px`; // 根据宽度调整位置
        cloudBefore.style.top = `-${pseudoHeight / 2}px`; // 根据高度调整位置
        cloudBefore.style.backgroundColor = 'white';
        cloudBefore.style.borderRadius = '50%';
        
        // 动态创建伪元素的大小和位置
        const cloudafter = document.createElement('div');
        cloudafter.classList.add('cloud-after');
        const pseudoWidth1 = 50 * sizeMultiplier; // 伪元素宽度为云朵宽度的25%
        const pseudoHeight1 = 50 * sizeMultiplier; // 伪元素高度为云朵高度的25%
        cloudafter.style.width = `${pseudoWidth1}px`;
        cloudafter.style.height = `${pseudoHeight1}px`;
        cloudafter.style.position = 'absolute';
        cloudafter.style.left = `${37 * sizeMultiplier}px`; // 根据宽度调整位置
        cloudafter.style.top = `-${pseudoHeight }px`; // 根据高度调整位置
        cloudafter.style.backgroundColor = 'white';
        cloudafter.style.borderRadius = '50%';


        cloud.appendChild(cloudBefore); // 把伪元素添加到云朵中
        cloud.appendChild(cloudafter); // 把伪元素添加到云朵中

        document.querySelector('.背景_云朵').appendChild(cloud);

        // 设置云朵存在的时间（例如：5000毫秒，即5秒）
        setTimeout(() => {
            cloud.remove(); // 在5秒后移除云朵
        }, 80000);

    }
}
        



