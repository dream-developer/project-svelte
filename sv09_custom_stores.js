import { writable } from 'svelte/store'; // 1

function createInfo() { // 2
  const { subscribe, set, update } = writable('Hello '); // 3

  return { // 4
    subscribe,
    add: (arg) => update(v => v + ', ' + arg),
    reset: () => set('Hello ')
  };
}

export const info = createInfo(); // 5