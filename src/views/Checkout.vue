<template>
	<div class="checkout">
		<breadcrumb :step="2" />
		<div class="checkout__container">
			
			<div class="checkout__product">
				<div class="checkout__product__img">
					<img :src="itemCart.product.maxresURL" alt />
				</div>
				<div class="checkout__details">
					<div class="checkout__details__side">
						<div class="checkout__details__side__title">Cart Total</div>
						<div class="checkout__details--title">{{itemCart.product.description}}</div>
						<div class="checkout__details--item_details">
							x{{itemCart.quantity}}
							{{itemCart.product.color}}
							Size {{itemCart.size}}
							<br />
							Item #{{itemCart.product.id}}
						</div>
					</div>
					<div class="checkout__details__side">
						<div class="checkout__details__side__title">Delivery Details</div>
						<div class="checkout__details--item_details">
							John Smith
							<br />Phone no:01312428200
							<br />Adress: Redwood City 2000
							<br />
						</div>

						<div class="checkout__details__total">
							<div class="checkout__details__total--desc">
								Total Cost
								<br />
								<small>Delivery included</small>
							</div>
							<div class="checkout__details__total--value">${{itemCart.product.price}}</div>
						</div>
					</div>

					<div class="checkout__details__side--full">
						<div class="checkout__details__side__title">Select your payment method</div>
						<payment-method
							v-for="(payment_method, index) in itemCart.paymentMethods"
							:payment_method="payment_method"
						></payment-method>

						<button class="checkout__details__submit">Continue</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import ItemCart from "@/models/ItemCart";
import PaymentMethod from "@/components/PaymentMethod.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

const options = Vue.extend({
	components: {
		"payment-method": PaymentMethod,
		"breadcrumb" : Breadcrumb
	},
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
		}
	}
}
</style>
