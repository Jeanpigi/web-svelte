<script>
	import About from './components/About.svelte';
	import Text from './components/Text.svelte';
	import Person from './components/Person.svelte';
	import Skills from './components/Skills.svelte';
	import Input from './components/Input.svelte';
	import Photos from './components/Photos.svelte';


	export let name;
	export let lastName;

	const data = {
		name: "Jean Pierre",
		lastName: "Arenas Ortiz",
		age: 28
	}
</script>

<main>
	<h1>Hello {name} {lastName}!</h1>
	<About></About>
	<Text anotherText="hola"></Text>
	<Text></Text>
	<Person {...data}></Person>
	<Skills></Skills>
	<Input/>
	<Photos></Photos>
</main>

<style>
	/*para establecer estilos globales es de la siguiente manera*/
	:global(body) {
		background-color: #f2eee2;
		color: #0084f6;
	}

	/*Formas de establecer variables*/
	:global(:root) {
		--theme-color: purple;
	}

	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>