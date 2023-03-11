<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	let users = [];
	let loading = 'true';
	onMount(async () => {
		let userData = await fetch('https://api.github.com/users');
		let githubUsers = await userData.json();
		console.log(githubUsers);
		users = githubUsers;
		loading = false;
	});
</script>

<h1 style="text-align: center;">Github Users</h1>
{#if loading}
	<h2>Loading...</h2>
{:else}
	<section>
		{#each users as user (user.id)}
			<article class="user">
				<img src={user.avatar_url} alt={user.login} />
				<div class="user-info">
					<h3>User: {user.login}</h3>
					<a href={user.html_url} class="btn-primary" target="blank">github url</a>
				</div>
			</article>
		{/each}
	</section>
{/if}

<style>
	h2 {
		text-align: center;
	}
</style>
