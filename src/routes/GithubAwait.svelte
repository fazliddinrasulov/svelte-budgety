<script>
	// @ts-nocheck

	const getUsers = async () => {
		let userData = await fetch('https://api.github.com/users');
		let githubUsers = await userData.json();
		return githubUsers;
	};
</script>

<h1 style="text-align: center;">Github Users</h1>

<section>
	{#await getUsers()}
		<!-- promise is pending -->
		<h2>Loading...</h2>
	{:then users}
		{#each users as user (user.id)}
			<article class="user">
				<img src={user.avatar_url} alt={user.login} />
				<div class="user-info">
					<h3>User: {user.login}</h3>
					<a href={user.html_url} class="btn-primary" target="blank">github url</a>
				</div>
			</article>
		{/each}
	{:catch error}
		<!-- promise was rejected -->
		<p>something went wrong: {error.message}</p>
	{/await}
</section>

<style>
	h2 {
		text-align: center;
	}
</style>
