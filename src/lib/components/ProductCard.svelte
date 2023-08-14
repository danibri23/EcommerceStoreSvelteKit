<script lang="ts">
	// Importación de tipos
	import type { Product } from '../interfaces/Product';
	import type { CartItem } from '../interfaces/CartItem';

	// Importación de la lógica del carrito y funciones relacionadas
	import { cartItems } from '../../stores/Cart';
	import { addToCart, removeFromCart, getQuantityById } from '../../utils/CardsFunction';

	// Definición de la propiedad 'product'
	export let product: Product = { id: '', name: '', price: 0 };

	// Declaración de variables locales
	let items: CartItem[]; // Almacena los elementos del carrito
	let quantity: number; // Almacena la cantidad del producto en el carrito

	// Suscripción al almacén 'cartItems'
	cartItems.subscribe((cart) => {
		items = cart;
		quantity = getQuantityById(product.id); // Obtiene la cantidad del producto en el carrito
	});
</script>

<div class="card">
	<header class="card-header">
		<h2>{product.name}</h2>
		<!-- Muestra el nombre del producto -->
	</header>
	<div class="card-body px-4">
		Cantidad: <strong>{quantity}</strong>
		<!-- Muestra la cantidad del producto en el carrito -->
	</div>
	<div class="card-body px-4">Precio: {product.price} gs.</div>
	<!-- Muestra el precio del producto -->
	<footer class="card-footer">
		<button
			class="p-2 rounded variant-glass-primary"
			on:click={() => {
				addToCart(product.id); // Agrega el producto al carrito
			}}
		>
			Agregar
		</button>
		<button
			class="p-2 rounded variant-glass-error"
			on:click={() => {
				removeFromCart(product.id); // Elimina el producto del carrito
			}}
		>
			Eliminar
		</button>
	</footer>
</div>
