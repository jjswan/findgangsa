import { createWebHistory, createRouter } from 'vue-router';
import Signup from '../register/Signup.vue';

const routes = [
	{
		path: '/',
		name: 'signup',
		component: Signup,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
