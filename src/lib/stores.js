import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { selectionDefaults } from '$lib/tools';

export const userDefaults = {
  presets: [
    {
      label: 'Vector logotype',
      presets: {
        size: null,
        aspect: 'square',
        color: null,
        type: null,
        filetype: 'svg',
        rights: null
      }
    },
    {
      label: 'HD transparency',
      presets: {
        size: 'large',
        aspect: null,
        color: 'transparent',
        type: null,
        filetype: 'png',
        rights: null
      }
    },
    {
      label: 'HD photography',
      presets: {
        size: '2mp',
        aspect: null,
        color: null,
        type: 'photo',
        filetype: null,
        rights: null
      }
    },
    {
      label: 'Ultrawide wallpaper',
      presets: {
        size: '2mp',
        aspect: 'ultrawide',
        color: null,
        type: null,
        filetype: null,
        rights: null
      }
    },
    {
      label: 'Vector icon',
      presets: {
        size: 'icon',
        aspect: null,
        color: 'transparent',
        type: null,
        filetype: 'svg',
        rights: null
      }
    }
  ]
}

export const User = writable((browser && JSON.parse(localStorage.getItem("User"))) || userDefaults);
User.subscribe((value) => browser && (localStorage.User = JSON.stringify(value)));

export const Selection = writable(selectionDefaults);