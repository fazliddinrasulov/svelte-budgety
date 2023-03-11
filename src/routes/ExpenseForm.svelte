<script>
	// @ts-nocheck

	import Title from './Title.svelte';
	import Icon from '@iconify/svelte';
	import { getContext } from 'svelte';

	const { add, edit } = getContext('state');
	export let name = '';
	export let amount = null;
	export let id = null;
	export let hideForm;
	$: isEmpty = !name || !amount;
	const handleSubmit = () => {
		if (id) {
			edit({ name, amount });
		} else {
			add(name, amount);
		}
		hideForm();
	};
</script>

<section class="form">
	<Title title="add expense" />
	<form class="expense-form" on:submit|preventDefault={handleSubmit}>
		<div class="form-control">
			<label for="name">name</label>
			<input type="text" id="name" bind:value={name} />
		</div>
		<div class="form-control">
			<label for="amount">amount</label>
			<input type="number" id="amount" bind:value={amount} />
		</div>
		{#if isEmpty}
			<p class="form-empty">please fill out all form fileds</p>
		{/if}
		<button type="submit" class="btn btn-block" class:disabled={isEmpty} disabled={isEmpty}
			>{id ? 'edit expenses' : 'add expenses'}
		</button>
		<button type="button" class="close-btn" on:click={hideForm}
			><Icon icon="material-symbols:close-sharp" /> close</button
		>
	</form>
</section>
