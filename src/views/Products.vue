<template>
	<div id="products" class="products">
		<div class="products__container">
			<div class="products__list">
				<product-thumb v-for="product in products" :product="product" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import ProductService from "@/service/ProductService";
import Product from "../models/Product";
import ProductThumb from "@/components/ProductThumb.vue";

const options = Vue.extend({
	components: {
		"product-thumb":ProductThumb
	},
});

@Component
export default class Products extends options {
	products: Array<Product> = [];

	constructor() {
		super();
		this.getProducts();
	}

	async getProducts() {
		const productService = new ProductService();
		this.products = await productService.index();
		console.log(this.products);
	}
}
</script>

<style lang="scss">
.products {
	&__container {
		margin: auto;
		max-width: 1200px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

    &__list{
        display: flex;
        justify-content: space-between;
        align-content: stretch;
        flex-wrap: wrap;
    }
}
</style>
