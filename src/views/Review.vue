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
						<div class="review__product__img review__product__img--mobile_only">
							<img :src="cart.item.product.maxresURL" alt />
						</div>
						<div class="review__details__side__info">
							<div class="review__details--title">{{cart.item.product.description}}</div>
							<div class="review__details--item_details">
								x{{cart.item.quantity}}
								{{cart.item.product.color}}
								Size {{cart.item.size}}
								<br />
								Item #{{cart.item.product.id}}
							</div>
						</div>

						
					</div>
					<div class="review__details__side review__details__side--payment__method">
						<div class="review__details__side__title">Payment Method</div>
						<div class="review__details__payment_method">
							<div class="review__details__payment_method--img">
								<img
									src="https://s3-alpha-sig.figma.com/img/ef35/ca9a/d8f41c43cb86f71b85022309b61f8755?Expires=1597017600&Signature=O4g4kTVAId22vut0HVZSdRjriWIKH4-OBMBC6v8x4oYvBGLnLCI39NKrA2QSQDbC9nTfxQGLzHAb8tOZvT9INuLb60HuXXBOFVH~BivVAXxjUwGELT4tYmFbKPNSV-pAsw05zAutSjiQxhaj6J3~BawQLRCWuF87Dkc-jdrzLxecSwCh8DMclGqM7xvZjfteHg3ZNuyfH6o7lwqjgNL1UWwxW4UE3txYa49GUF13nF3uqPDU1ZFkr16OQtPxkAC-B5QE0Wz13D~zYw5Gg3e8-HG1CToQsjtn1AI4CoHEax~et~aH5dtfKdD6y2XNC10ZrEZynzpgkJQdr5rYNw2gSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
									alt
								/>
							</div>
							<div class="review__details__payment_method--title">Online Banking</div>
						</div>
						<hr />	
					</div>
					<div class="review__details__side review__details__side--total_cost">
						<div class="review__details__total">
							<div class="review__details__total--desc">
								Total Cost
								<br />
								<small>Delivery included</small>
							</div>
							<div class="review__details__total--value">${{cart.totalCost}}</div>
						</div>
					</div>
					<div class="review__details__side review__details__side--button">
						<button v-on:click="continueToPayment();" class="review__details__submit">Place Order</button>
					</div>
				</div>
			</div>
		</div>
		<pay-with-my-bank :enable="enablePayWithMyBank" :cart="cart" />
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
export default class review extends options {
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
			@media (max-width: 486px) {
				display: none;
				width: 40%;
			}

			&--mobile_only {
				display: none;
				width: 30%;
				@media (max-width: 486px) {
					display: flex;
				}
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
		align-content: flex-start;
		justify-content: space-between;
		@media (max-width: 486px) {
			width: 100%;
			background: white;
			margin: 0.5rem;
			padding: 1rem;
		}

		&__side {
			width: 49%;
			margin-bottom: 5rem;
			@media (max-width: 486px) {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				background: #f7f7f7;
				border-radius: 9.02222px;
				padding: 1rem;
				margin-bottom:2.5rem;
			}

			&__title {
				font-family: Open Sans;
				font-style: normal;
				font-weight: normal;
				font-size: 22px;
				line-height: 30px;
				margin-bottom: 1.5rem;
				color: #000000;
				@media (max-width: 486px) {
					width: 100%;
					font-weight: bold;
				}
			}

			&--full {
				width: 100%;
			}

			&--button {
				display: flex;
				align-content: flex-end !important;
				@media (max-width: 486px) {
					background:white;
				}
			}
			hr{
				display: none;
			}

			@media (max-width: 486px) {
				&--payment__method{
					margin-bottom:0rem;
					border-radius: 1rem 1rem 0 0;
					hr{
						display: block;
						width:100%;
						border:solid .5px #D6D6D6;;
					}
				}
				&--total_cost{
					border-radius: 0 0 1rem 1rem ;
					
				}
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
			padding: 0.8rem 0.7rem;
			border: 0;
			border-radius: 3px;
			width: 100%;
			cursor: pointer;
		}

		&__payment_method {
			display: flex;
			width: 100%;
			align-items: center;

			&--img {
				margin-right: 1.5rem;
				img {
					max-height: 5rem;
				}
			}

			&--title {
				font-family: Open Sans;
				font-style: normal;
				font-weight: normal;
				font-size: 1.7rem;
				line-height: 2rem;
			}
		}
	}
}
</style>
