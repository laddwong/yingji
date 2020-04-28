import Vue from 'vue'
import VueRouter from 'vue-router'

const HomePage = () => import('../pages/homePages/HomePage')
const DiscoverPage = () => import('../pages/DiscoverPage')
const PostPage = () => import('../pages/PostPage')
const MessagePage = () => import('../pages/MessagePage')
const MePage = () => import('../pages/MePages/MePage')
const LoginPage = () => import('../pages/MePages/LoginPage')
const PhotographyDetail = () => import('../pages/PhotographyDetail')
const UserDetail = () => import('../pages/UserDetail')
const AllCourses = () => import('../pages/AllCourses')

Vue.use(VueRouter)

export default new VueRouter ({
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage
		},
		{
			path: '/discover',
			name: 'discover',
			component: DiscoverPage
		},
		{
			path: '/discover/course',
			component: AllCourses
		},
		{
			path: '/post',
			name: 'post',
			component: PostPage
		},
		{
			path: '/message',
			name: 'message',
			component: MessagePage
		},
		{
			path: '/me',
			name: 'me',
			component: MePage
		},
		{
			path: '/login',
			name: 'login',
			component: LoginPage
		},
		{
			path: '/photography-detail/:id',
			component: PhotographyDetail
		},
		{
			path: '/user-detail/:username',
			component: UserDetail
		}
	]
})