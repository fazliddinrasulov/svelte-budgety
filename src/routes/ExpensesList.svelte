<script>
	// @ts-nocheck
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	import Title from './Title.svelte';
	import ExpenseSingle from './ExpenseSingle.svelte';
	export let expenses;
</script>

<section>
	<Title title="expense list" />
	<ul>
		{#each expenses as expense, index (expense.id)}
			<div in:fly={{ x: 200, delay: (index + 1) * 300 }} out:fly={{ x: -200 }} animate:flip>
				<ExpenseSingle {...expense} />
			</div>
		{:else}
			<h2>no expenses added to the list</h2>
		{/each}
	</ul>
</section>

<style>
	h2 {
		text-transform: capitalize;
	}
</style>
