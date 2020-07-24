<template>
	<div class="payment_method" :class="{active: payment_method.active}" v-on:click="payment_method.active = true">
		<div class="payment_method__title">{{payment_method.name}}</div>
		<div class="payment_method__img">
			<img :src="payment_method.img" alt />
		</div>
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
    transition: .2s ease-in-out border;

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

	&.active,&:hover {
		border: solid 1px #5dac50;
	}
}
</style>
