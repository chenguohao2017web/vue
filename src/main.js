// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// import FindMusic from './components/findMusic'
// import MyMusic from './components/myMusic'
// import Friend from './components/friend'
// import User from './components/user'
import router from './routers.js'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

/* eslint-disable no-new */
// const routes

//created 一般用于在ajax 请求数据或者调用方法函数时候可以使用，但dom获取不到。$el不可见
//mounted 所有的dom已经渲染完毕，可以获取DOM
//update 当数据发生改变时候可以调用 对数据统一做处理。
//如果想处理不同的数据更新，就要在created里使用nextTick（）函数
//watch 针对某一个数据发生变化时 只作用在data数据

// const router = new VueRouter({
//     mode: 'history',
//     routes: [
//         { path: '/', redirect: '/findMusic' },
//         {
//             path: "/myMusic",
//             component: MyMusic
//         }, {
//             path: "/friend",
//             component: Friend
//         }, {
//             path: "/user",
//             component: User
//         }, {
//             path: "/findMusic",
//             component: FindMusic
//         }
//     ]
// })

new Vue({
    router,
    template: '<App/>',
    components: { App }
}).$mount('#app')