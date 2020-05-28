import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Jean Pierre',
		lastName: 'Arenas Ortiz'
	}
});

export default app;