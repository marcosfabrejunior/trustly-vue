<template>
	<div class="checkout">
		<div class="checkout__container">
			<div class="breadcrumb"></div>
			<div class="checkout__product">
                
				<div class="checkout__product__img">
					<img :src="itemCart.product.maxresURL" alt />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import ItemCart from "@/models/ItemCart";

const options = Vue.extend({
	components: {},
	props: [],
});

@Component
export default class Checkout extends options {
	constructor() {
		super();
	}

	get itemCart() {
		return this.$store.state.itemCart;
	}
}
</script>

<style lang="scss">
.checkout {
	&__container {
		margin: auto;
		max-width: 1200px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin-top: 3rem;
	}

	&__product {
		display: flex;
		&__img {
			margin: 1.5rem;
			width: 40%;
			img {
				max-width: 100%;
				border-radius: 1rem;
			}
		}

		&__details {
			margin: 1.5rem;
			width: 60%;
			background: #f7f7f7;
			border-radius: 1rem;
		}
	}
}
</style>
