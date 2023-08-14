<script lang="ts">
	import { ProductCard } from '../lib/components/';

	import { Products } from '../utils/products';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="grid grid-cols-3 gap-4">
		<div class="col-span-3">
			<h1>Notas</h1>
		</div>

		{#each Products as product}
			<ProductCard {product} />
		{/each}
		<div class="col-span-3">
			<button class="btn variant-filled-primary">Aceptar</button>
		</div>
	</div>
</div>
