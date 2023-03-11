<script>
	// @ts-nocheck
	import { blur, slide, scale, fade, fly } from 'svelte/transition';
	import { getContext } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import Icon from '@iconify/svelte';
	export let id;
	export let name;
	export let amount;
	let { remove, modify, showForm } = getContext('state');
	let toggle = false;
</script>

<article class="single-expense">
	<div class="expense-info">
		<h2>
			{name}
			<button
				class="amount-btn"
				on:click={() => {
					toggle = !toggle;
				}}
			>
				<Icon icon="material-symbols:keyboard-arrow-down" />
			</button>
		</h2>
		{#if toggle}
			<!-- <h4 transition:blur>amount: ${amount}</h4>
			<h4 transition:scale>amount: ${amount}</h4>
			<h4 transition:slide>amount: ${amount}</h4> -->
			<!-- <h4 transition:fade>amount: ${amount}</h4> -->
			<h4 transition:slide>
				amount: ${amount}
			</h4>
		{/if}
	</div>
	<div class="expense-buttons">
		<button class="expense-btn edit-btn" on:click={() => modify(id)} on:click={showForm}>
			<Icon icon="bi:pen" />
		</button>
		<button
			class="expense-btn delete-btn"
			on:click={() => {
				remove(id);
			}}
		>
			<Icon icon="bi:trash" />
		</button>
	</div>
</article>
