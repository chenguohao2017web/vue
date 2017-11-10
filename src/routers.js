import Vue from 'vue';
import VueRouter from 'vue-router'
import FindMusic from './components/findMusic'
import MyMusic from './components/myMusic'
import Friend from './components/friend'
import User from './components/user'
Vue.use(VueRouter)

export default new VueRouter({
	mode:'history',
	routers:[{
		path:'/',
		redirect:'/findMusic'
	},
	{
		path: "/myMusic",
		component: MyMusic
	}, {
		path: "/friend",
		component: Friend
	}, {
		path: "/user",
		component: User
	}, {
		path: "/findMusic",
		component: FindMusic
	}]
})
