<template>
	<div id="products" class="products">
		<div class="products__container">
			<search-bar placeholder="Search for your Sneaker"></search-bar>
			<div class="products__list">
				<product-thumb v-for="(product, index) in products" :product="product" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import ProductService from "@/service/ProductService";
import Product from "../models/Product";
import ProductThumb from "@/components/ProductThumb.vue";
import SearchBar from "@/components/SearchBar.vue";

const options = Vue.extend({
	components: {
		"product-thumb":ProductThumb,
		"search-bar":SearchBar
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
		flex-wrap: wrap;
	}

    &__list{
        display: flex;
        justify-content: space-between;
        align-content: stretch;
        flex-wrap: wrap;
    }
}
</style>
