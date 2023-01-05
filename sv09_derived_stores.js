import { writable, derived } from 'svelte/store'; // 1

export const info = writable('Hello '); // 2

export const truncateInfo = derived( // 3
	info, // 3-1
 	$info =>  $info.length > 10 ? $info.substr(0,10) + ' …'  : $info // 3-2
);