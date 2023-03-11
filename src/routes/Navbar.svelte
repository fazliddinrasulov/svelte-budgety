<script>
	// @ts-nocheck

	import Icon from '@iconify/svelte';
	export let showForm;
</script>

<nav class="nav">
	<div class="nav-center">
		<h1 class="nav-title">budget calculator</h1>
		<button class="nav-btn align-center" type="button" on:click={showForm}
			><Icon icon="material-symbols:add" />
			<span>add</span>
		</button>
	</div>
</nav>

<style>
	.align-center {
		display: flex;
		align-items: center;
	}
</style>
