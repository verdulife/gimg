import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { selectionDefaults } from '$lib/tools';

export const userDefaults = {
  hideTools: false
}

export const User = writable((browser && JSON.parse(localStorage.getItem("User"))) || userDefaults);
User.subscribe((value) => browser && (localStorage.User = JSON.stringify(value)));

export const Selection = writable(selectionDefaults);