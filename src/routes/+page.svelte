<script>
	// @ts-nocheck

	import { onMount, afterUpdate, setContext } from 'svelte';
	import { expenseStore } from './store';
	import Navbar from './Navbar.svelte';
	import ExpensesList from './ExpensesList.svelte';
	import Totals from './Totals.svelte';
	import ExpenseForm from './ExpenseForm.svelte';
	import Modal from './Modal.svelte';
	// import Github from './Github.svelte';
	// import GithubAwait from './GithubAwait.svelte';

	let expenses = [];
	let setName = '';
	let setAmount = null;
	let setId = null;
	let isFormOpen = false;
	$: total = expenses.reduce((acc, curr) => {
		return (acc += curr.amount);
	}, 0);
	const showForm = () => {
		isFormOpen = true;
	};
	const hideForm = () => {
		isFormOpen = false;
		setName = '';
		setAmount = null;
		setId = null;
	};
	const addExpense = (name, amount) => {
		expenses = [{ id: Math.random() * Date.now(), name: name, amount: amount }, ...expenses];
		setAmount = null;
		setName = '';
	};
	const removeExpense = (id) => {
		expenses = expenses.filter((item) => item.id !== id);
		$expenseStore = expenses;
	};
	const clearExpense = () => {
		expenses = [];
	};
	const editExpense = ({ name, amount }) => {
		expenses = expenses.map((item) => {
			if (item.id === setId) {
				return { ...item, name, amount };
			}
			return item;
		});
		setId = null;
		setAmount = null;
		setName = '';
	};
	const setModifiedExpense = (id) => {
		let expense = expenses.find((item) => {
			return item.id === id;
		});
		setId = expense.id;
		setName = expense.name;
		setAmount = expense.amount;
	};
	const state = {
		firstName: 'Fazliddin',
		remove: removeExpense,
		add: addExpense,
		modify: setModifiedExpense,
		edit: editExpense,
		showForm: showForm
	};
	setContext('state', state);
	onMount(() => {
		expenses = $expenseStore;
	});
	afterUpdate(() => {
		$expenseStore = expenses;
	});
</script>

<Navbar {showForm} />
<main class="content">
	<!-- <GithubAwait /> -->
	{#if isFormOpen}
		<Modal>
			<ExpenseForm name={setName} amount={setAmount} id={setId} {hideForm} />
		</Modal>
	{/if}

	<Totals title="total expenses" {total} />
	<ExpensesList {expenses} />
	{#if expenses.length !== 0}
		<button type="button" class="btn btn-primary btn-block" on:click={clearExpense}>clear</button>
	{/if}
</main>

<style>
</style>
