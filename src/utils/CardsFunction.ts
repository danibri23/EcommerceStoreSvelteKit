import { cartItems } from '../stores/Cart';

// Esta función agrega un artículo al carrito o incrementa su cantidad si ya existe
export const addToCart = (id: string) => {
	cartItems.update((items) => {
		const item = items.find((item) => item.id === id);

		if (item) {
			return items.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			);
		}

		return [...items, { id, quantity: 1 }];
	});
};

// Esta función disminuye la cantidad de un artículo en el carrito o lo elimina si la cantidad llega a cero
export const removeFromCart = (id: string) => {
	cartItems.update((items) => {
		const itemIndex = items.findIndex((item) => item.id === id);

		if (itemIndex !== -1) {
			const updatedItems = [...items];
			updatedItems[itemIndex].quantity--;

			if (updatedItems[itemIndex].quantity <= 0) {
				updatedItems.splice(itemIndex, 1);
			}

			return updatedItems;
		}

		return items;
	});
};

// Esta función devuelve la cantidad de un artículo en el carrito basada en su ID
export const getQuantityById = (productId: string): number => {
	let quantity = 0; // Inicializa la cantidad en 0

	// Suscribe una función al almacén cartItems para recibir actualizaciones
	cartItems.subscribe((items) => {
		// Busca el artículo en el carrito con la ID especificada
		const item = items.find((item) => item.id === productId);

		// Si se encuentra el artículo, se actualiza la variable 'quantity' con su cantidad
		// Si no se encuentra, se mantiene la cantidad en 0
		quantity = item ? item.quantity : 0;
	});

	// Devuelve la cantidad actual del artículo en el carrito
	return quantity;
};
