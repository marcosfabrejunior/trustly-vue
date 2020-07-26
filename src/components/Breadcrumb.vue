<template>
	<div class="breadcrumb"> 
		<div class="breadcrumb__container">
			<div v-for="(b_step, index) in steps" class="breadcrumb__step" :class="{'breadcrumb__step--active':b_step.active}"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import ItemCart from "@/models/ItemCart";

const options = Vue.extend({
	components: {},
	props: ["step"],
});

@Component
export default class Breadcrumb extends options {

	
	get steps() {
		return [
			{
				name: "Cart",
				active: this.step >= 1,
			},
			{
				name: "Payment Options",
				active: this.step >= 2,
			},
			{
				name: "Receipt",
				active: this.step >= 3,
			},
		];
	}
}
</script>

<style lang="scss">
.breadcrumb {
	width: 100%;
	display: flex;
	justify-content: space-between;

	&__container {
		margin: auto;
		max-width: 1200px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin-top: 3rem;	
	}

	&__step {
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 3rem;
		background: #e8e8e8;

		&--active{

		}
	}
}
</style>
