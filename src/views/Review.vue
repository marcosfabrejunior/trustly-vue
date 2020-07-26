<template>
	<div class="review">
		<breadcrumb :step="3" />
		<div class="review__container">
			<div class="review__product">
				<div class="review__product__img">
					<img :src="cart.item.product.maxresURL" alt />
				</div>
				<div class="review__details">
					<div class="review__details__side">
						<div class="review__details__side__title">Order Summary</div>
						<div class="review__details--title">{{cart.item.description}}</div>
						<div class="review__details--item_details">
							x{{cart.item.quantity}}
							{{cart.item.product.color}}
							Size {{cart.item.size}}
							<br />
							Item #{{cart.item.product.id}}
						</div>
					</div>
					<div class="review__details__side">
						<div class="review__details__side__title">Delivery Details</div>
						<div class="review__details--item_details">
							{{client.name}}
							<br />Phone no: {{client.phone}}
							<br />Adress: {{client.address}}
							<br />
						</div>

						<div class="review__details__side review__details__side--full">
							<div class="review__details__total--desc">
								Total Cost
								<br />
								<small>Delivery included</small>
							</div>
							<div class="review__details__total--value">${{cart.totalCost}}</div>
								<button v-on:click="continueToPayment();" class="review__details__submit">Continue</button>
						</div>
					</div>

					
				</div>
			</div>
		</div>
		<pay-with-my-bank :enable="enablePayWithMyBank" :cart="cart"  />
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import ItemCart from "@/models/ItemCart";
import Cart from "@/models/Cart";
import PaymentMethod from "@/components/PaymentMethod.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import PayWithMyBank from "@/components/PayWithMyBank.vue";

const options = Vue.extend({
	components: {
		"payment-method": PaymentMethod,
		"breadcrumb" : Breadcrumb,
		"pay-with-my-bank":PayWithMyBank
	},
	props: [],
});

@Component
export default class review extends options {
	enablePayWithMyBank: Boolean = false;
	constructor() {
		super();
	}

	get itemCart() {
		return this.$store.state.itemCart;
	}

	get client(){
		return this.$store.getters.client;
	}
	get cart(){
		return this.$store.getters.cart;
	}

	continueToPayment(){
		this.enablePayWithMyBank = false;
		this.enablePayWithMyBank = true;


	}
}
</script>

<style lang="scss">
.review {
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
	}

	&__details {
		margin: 1.5rem;
		width: 60%;
		background: #f7f7f7;
		border-radius: 1rem;
		padding: 3rem;
		display: flex;
		flex-wrap: wrap;
		align-content: stretch;

		&__side {
			width: 50%;
			margin-bottom:1.5rem;
			&__title {
				font-family: Open Sans;
				font-style: normal;
				font-weight: normal;
				font-size: 22px;
				line-height: 30px;
				margin-bottom: 1.5rem;
				color: #000000;
			}

			&--full {
				width: 100%;
			}
		}

		&--title {
			font-family: Open Sans;
			font-style: normal;
			font-weight: normal;
			font-size: 16px;
			line-height: 20px;
			/* identical to box height, or 122% */

			color: #000000;
		}

		&--item_details {
			font-family: Open Sans;
			font-style: normal;
			font-weight: normal;
			font-size: 16px;
			line-height: 25px;
			/* or 156% */

			color: #a5a5a5;
		}

		&__total {
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;
			margin-top: 1.5rem;

			&--desc {
				font-family: Open Sans;
				font-style: normal;
				font-weight: normal;
				font-size: 16px;
				line-height: 20px;
				/* identical to box height, or 122% */

				color: #000000;

				small {
					font-family: Open Sans;
					font-style: normal;
					font-weight: normal;
					font-size: 16px;
					line-height: 20px;
					/* identical to box height, or 122% */

					color: #a5a5a5;
				}
			}

			&--value {
				font-family: Open Sans;
				font-style: normal;
				font-weight: normal;
				font-size: 4rem;
				line-height: 4.4rem;
				/* identical to box height, or 100% */

				color: #000000;
			}
		}

		&__submit {
			background: #6b8067;
			border-radius: 5px;
			font-family: Open Sans;
			font-style: normal;
			font-weight: bold;
			font-size: 14px;
			line-height: 19px;
			text-align: center;

			color: #ffffff;
			padding:1.2rem;
			border: 0;
			border-radius: 3px;
			width:50%;
			float: right;
			cursor: pointer;
		}
	}
}
</style>
