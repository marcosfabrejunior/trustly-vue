<template>
	<div class="checkout">
		<breadcrumb :step="2" />
		<div class="checkout__container">
			<div class="checkout__product">
				<div class="checkout__product__img">
					<img :src="cart.item.product.maxresURL" alt />
				</div>
				<div class="checkout__details">
					<div class="checkout__details__side">
						<div class="checkout__details__side__title">Cart Total</div>
						<div class="checkout__details--title">{{cart.item.description}}</div>
						<div class="checkout__details--item_details">
							x{{cart.item.quantity}}
							{{cart.item.product.color}}
							Size {{cart.item.size}}
							<br />
							Item #{{cart.item.product.id}}
						</div>
					</div>
					<div class="checkout__details__side">
						<div class="checkout__details__side__title">Delivery Details</div>
						<div class="checkout__details--item_details">
							{{client.name}}
							<br />
							Phone no: {{client.phone}}
							<br />
							Adress: {{client.address}}
							<br />
						</div>
					</div>

					<div class="checkout__details__side checkout__details__side--offset"></div>
					<div class="checkout__details__total">
						<div class="checkout__details__total--desc">
							Total Cost
							<br />
							<small>Delivery included</small>
						</div>
						<div class="checkout__details__total--value">${{cart.totalCost}}</div>
					</div>

					<div class="checkout__details__side--full">
						<div
							class="checkout__details__side__title checkout__details__side__title--desktop_only"
						>Select your payment method</div>
						<div
							class="checkout__details__side__title checkout__details__side__title--mobile_only"
						>Payment Method</div>
						<payment-method
							v-for="(payment_method, index) in cart.paymentMethods"
							:payment_method="payment_method"
						></payment-method>

						<button v-on:click="continueToPayment();" class="checkout__details__submit">Continue</button>
					</div>
				</div>
			</div>
		</div>
		<pay-with-my-bank v-on:payment_success="goToReview()" :enable="enablePayWithMyBank" :cart="cart" />
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
		breadcrumb: Breadcrumb,
		"pay-with-my-bank": PayWithMyBank,
	},
	props: [],
});

@Component
export default class Checkout extends options {
	enablePayWithMyBank: Boolean = false;
	constructor() {
		super();
	}

	get itemCart() {
		return this.$store.state.itemCart;
	}

	get client() {
		return this.$store.getters.client;
	}
	get cart() {
		return this.$store.getters.cart;
	}

	continueToPayment() {
		this.enablePayWithMyBank = false;
		this.enablePayWithMyBank = true;
	}

	goToReview() {
		this.$router.push("/review-and-confirmation");
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
			@media (max-width: 486px) {
				width: 30%;
				padding: 1.5rem;
				position: absolute;
			}

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
		@media (max-width: 486px) {
			width: 100%;
		}

		&__side {
			width: 50%;
			margin-bottom: 1.5rem;
			@media (max-width: 486px) {
				width: 100%;
				padding-left: 50%;
			}

			&__title {
				font-family: Open Sans;
				font-style: normal;
				font-weight: normal;
				font-size: 2.2rem;
				line-height: 3rem;
				margin-bottom: 1.5rem;
				color: #000000;

				@media (max-width: 486px) {
					font-size: 1.6rem;
					line-height: 1.8rem;
					margin-bottom: 1rem;
				}

				&--desktop_only{
					@media (max-width: 486px) {
						display: none;
					}
				}
				&--mobile_only{
					display: none;
					font-size: 2rem;
					margin-bottom: 1.5rem;
					@media (max-width: 486px) {
						display: flex;
					}
				}
			}

			&--full {
				width: 100%;
			}
		}

		&--title {
			font-family: Open Sans;
			font-style: normal;
			font-weight: normal;
			font-size: 1.6rem;
			line-height: 2rem;
			/* identical to box height, or 122% */

			color: #000000;
		}

		&--item_details {
			font-family: Open Sans;
			font-style: normal;
			font-weight: normal;
			font-size: 1.6rem;
			line-height: 2.5rem;
			/* or 156% */

			color: #a5a5a5;

			@media (max-width: 486px) {
				font-size: 1.4rem;
				line-height: 1.8rem;
			}
		}

		&__total {
			display: flex;
			width: 50%;
			align-self: flex-end;
			justify-content: space-between;
			align-items: center;
			margin-top: 1.5rem;

			@media (max-width: 486px) {
				width: 100%;
				margin-bottom: 3rem;
			}

			&--desc {
				font-family: Open Sans;
				font-style: normal;
				font-weight: normal;
				font-size: 1.6rem;
				line-height: 2rem;
				/* identical to box height, or 122% */

				color: #000000;

				small {
					font-family: Open Sans;
					font-style: normal;
					font-weight: normal;
					font-size: 1.6rem;
					line-height: 2rem;
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
			font-size: 1.4rem;
			line-height: 1.9rem;
			text-align: center;

			color: #ffffff;
			padding: 1.2rem;
			border: 0;
			border-radius: 3px;
			width: 50%;
			float: right;
			cursor: pointer;

			@media (max-width: 486px) {
				width: 100%;
				font-size: 2rem;
				line-height: 3rem;
			}
		}
	}
}
</style>
