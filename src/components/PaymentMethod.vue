<template>
	<div
		class="payment_method"
		:class="{active: payment_method.active}"
		v-on:click="payment_method.active = true"
	>
		<div class="payment_method__title">{{payment_method.name}}</div>
		<div class="payment_method__img">
			<img :src="payment_method.img" alt />
		</div>
		<div v-if="payment_method.discountLabel" class="payment_method__discount_label">{{payment_method.discountLabel}}</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

const options = Vue.extend({
	components: {},
	props: ["payment_method"],
});

@Component
export default class PaymentMethod extends options {
	constructor() {
		super();
	}
}
</script>

<style lang="scss">
.payment_method {
	// width:100%;
	padding: 1.5rem;
	margin-bottom: 1.5rem;
	background-color: white;
	border-radius: 1rem;
	border: solid 1px transparent;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	transition: 0.2s ease-in-out border;
	position: relative;

	&__title {
		font-family: Open Sans;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 22px;
		color: #a5a5a5;
	}

	&__img {
		img {
			max-height: 3rem;
		}
	}

	&__discount_label {
		position: absolute;
		top: -.5rem;
		left: 5%;
		height: 1.5rem;
		padding: 0 1.4rem;
		background: #ffcc00;
		font-family: Open Sans;
		font-style: normal;
		font-weight: bold;
		font-size: .977rem;
		line-height: 1.3rem;
		text-align: center;
		border-radius: 2.079px;
		display: flex;
		align-items: center;

		color: #9e7d27;
	}

	&.active,
	&:hover {
		border: solid 1px #5dac50;
	}
}
</style>
