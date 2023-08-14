import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const userDefaults = {
  currentSelection: {
    size: null,
    aspect: null,
    color: null,
    type: null,
    filetype: null,
    rights: null
  },
  lastSearch: []
}

export const User = writable((browser && JSON.parse(localStorage.getItem("User"))) || userDefaults);
User.subscribe((value) => browser && (localStorage.User = JSON.stringify(value)));