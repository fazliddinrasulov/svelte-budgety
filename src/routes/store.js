// @ts-nocheck
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const expenseStore = writable(
	browser && (JSON.parse(localStorage.getItem('expenseStore')) || [])
);
expenseStore.subscribe((val) => browser && (localStorage.expenseStore = JSON.stringify(val)));
