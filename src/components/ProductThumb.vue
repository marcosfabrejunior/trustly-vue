<template>
	<div class="product-thumb">
		<div class="product-thumb__img">
			<img :src="itemCart.product.thumbnailURL" alt />
		</div>
		<div class="product-thumb__title">{{itemCart.product.description}}</div>

		<div class="product-thumb__options">
			<div class="product-thumb__options__item">
				<label for>Size</label>
				<select v-model="itemCart.size">
					<option v-for="size in itemCart.product.sizeAvailable" :value="size">{{size}}</option>
				</select>
			</div>
			<div class="product-thumb__options__item">
				<label for>Quantity</label>
				<input type="number" v-model="itemCart.quantity" />
			</div>
		</div>
		<div class="product-thumb__price">$ {{itemCart.product.price}}</div>
		<div class="product__thumb__add-to-cart">
			<button v-on:click="addToCart(itemCart)" class="product__thumb__add-to-cart--button">Add to Cart</button>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import ItemCart from "@/models/ItemCart";

const options = Vue.extend({
	components: {},
	props: ["product"],
});

@Component
export default class ProductThumb extends options {
	itemCart: ItemCart;
	constructor() {
		super();

		this.itemCart = new ItemCart(this.product, Number(1), Number(41));
	}

	addToCart(itemCart: ItemCart) {
		this.$store.dispatch('add_to_cart', this.itemCart);
		this.$router.push("/checkout");
	}
}
</script>

<style lang="scss">
.product-thumb {
	margin-top: 6rem;
	margin-left: 1.5rem;
	margin-right: 1.5rem;
	box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);
	&__img {
		img {
			max-width: 100%;
		}
	}

	&__title {
		font-family: Open Sans;
		font-style: normal;
		font-weight: normal;
		font-size: 2rem;
		line-height: 5rem;
		/* or 88% */

		text-align: center;

		color: #000000;
	}

	&__options {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 100%;

		&__item {
			label {
				font-family: Open Sans;
				font-style: normal;
				font-weight: normal;
				font-size: 12px;
				line-height: 18px;
				color: #8d8d8d;
				margin: 0.5rem;
			}
		}

		select,
		input {
			border: 0.900966px solid #e8e8e8;
			box-sizing: border-box;
			border-radius: 2.52271rem;
			font-family: Open Sans;
			font-style: normal;
			font-weight: normal;
			font-size: 1.2rem;
			line-height: 1.8rem;
			background-color: white;
			padding: 0.2rem 1.2rem;
			margin: 0.5rem;
			width: 6rem;
		}
	}

	&__add-to-cart {
		width: 100%;
	}
	button {
		cursor: pointer;
		background: #6b8067;
		border-radius: 4.50483px;
		width: 100%;
		font-family: Open Sans;
		font-style: normal;
		font-weight: bold;
		font-size: 1.4rem;
		line-height: 1.9rem;
		text-align: center;
		border: 0px;
		padding: 1.2rem;
		margin-top: 2rem;

		color: #ffffff;
	}

	&__price {
		font-family: Open Sans;
		font-style: normal;
		font-weight: 600;
		font-size: 2.1rem;
		line-height: 4rem;

		/* or 84% */

		text-align: center;

		color: #000000;
	}
}
</style>
