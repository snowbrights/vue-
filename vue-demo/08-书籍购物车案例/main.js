const app = new Vue({
    el: '#app',
    data: {
        tests: [{
                id: 1,
                name: 'C++程序设计',
                data: '2021.7.7',
                level: '2 ',
                count: 1
            },
            {
                id: 2,
                name: 'ROS机器人',
                data: '2021.7.7',
                level: '2 ',
                count: 1
            },
            {
                id: 3,
                name: '大学英语',
                data: '2021.7.15',
                level: '3 ',
                count: 1
            },
            {
                id: 4,
                name: '数据库原理与应用',
                data: '2021.7.16',
                level: '4 ',
                count: 1
            },
            {
                id: 1,
                name: '计算机组成原理',
                data: '2021.7.17',
                level: '5 ',
                count: 1
            },
        ]
    },
    methods: {
        // getFinalLevel(level) {
        //     return '⭐' + level.toFixed(2)
        // }
        increment(index) {
            this.tests[index].count++

        },
        decrement(index) {
            this.tests[index].count--
        },
        removeHandle(index) {
            this.tests.splice(index, 1)
        }
    },
    computed: {
        totalLevel() {
            let totalLevel = 0
            for (let i = 0; i < this.tests.length; i++) {
                totalLevel += this.tests[i].level * this.tests[i].count
            }

            return totalLevel

            //2.
            //for(let i in/0f this/tests)
            //reduce
        }
    },
    filters: {
        showLevel(level) {
            return level + '⭐'

        }
    },
})

//编程范式：函数式编程/声明式编程
//编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）


//三个高阶函数：filter/map/reduce

//1.filter
// const nums = [10, 20, 111, 222, 444, 50, 40]
//     //filter中的回调函数有一个要求，必须返回一个boolean值
//     //true：当返回true时，函数内部会自动将这次回调的n加入新的数组中
//     //false:当返回false时，函数内部会过滤这次的n
// let newNums = nums.filter(function(n) {
//     return n < 100
//         // return n * 2 //考虑：为什么用不了？
// })
// console.log(newNums);

// //map函数的使用
// let new2Nums = newNums.map(function(n) {
//     return n * 2
// })
// console.log(new2Nums)
//     //redcue函数的使用
//     //作用：对数组中所有内容进行汇总（至少传两个值）
//     // reduce(参数1，参数2)
// let total = new2Nums.reduce(function(preValue, n) {
//     return preValue + n
// }, 0)
// console.log(total)

// //未注销

// //高阶代码合体：
// let total = nums.filter(function(n) {
//     return n < 100
// }).map(function(n) {
//     return n * 2
// }).reduce(function(preValue, n) {
//     return preValue + n
// }, 0)

// //更高阶：
// let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
// console.log(total);

//阅读性极差：
// //1.筛选
// const nums=[10,20,111,222,444,50,40]
// let newNums=[]
// for(let n of nums){
//     if(n<=100){
//         newNums.push(n)
//     }
// }
// //2.转化为2倍
// let new2Nums=[]
// for(let n of newNums){
//     new2Nums.push(n * 2)

// }
// console.log(new2Nums);
// //3.转化求和
// let total = 0
// for(let n of new2Nums){
//     total +=n
// }