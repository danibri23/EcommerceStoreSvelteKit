import type { CartItem } from '../lib/interfaces/CartItem';
import { writable } from 'svelte/store';

// Creamos el almacén (store) cartItems utilizando el tipo CartItem[]
export const cartItems = writable<CartItem[]>([]);
