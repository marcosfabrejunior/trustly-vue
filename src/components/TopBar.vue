<template>
	<div class="topbar">
		<div class="topbar__container">
			<div class="topbar__back">
				<button v-if="showButtonBack" v-on:click="back()" class="topbar__back__button">
					<svg
						width="18"
						height="19"
						viewBox="0 0 18 19"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M17.559 8.41522H4.32334L10.3974 2.34115L8.8585 0.802246L0.157959 9.50279L8.8585 18.2033L10.3974 16.6644L4.32334 10.5904H17.559V8.41522Z"
							fill="black"
						/>
					</svg>
					Back
				</button>
			</div>
			<div class="topbar__title">{{title}}</div>
			<div :style="avatarImageStyle" class="topbar__avatar"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

const options = Vue.extend({
	components: {},
	props: ["avatarImage", "title"],
});

@Component
export default class TopBar extends options {
	constructor() {
		super();
	}

	get avatarImageStyle() {
		return { backgroundImage: `url(${this.avatarImage})` };
	}

	back() {
		if (this.$route.name == "Checkout") {
			return this.$router.push("/");
		}

		return this.$router.push("/checkout");
	}

	get showButtonBack() {
		if (this.$route.name == "Sneakers") {
			return false;
		}
		return true;
	}
}
</script>

<style lang="scss">
.topbar {
	position: fixed;
	width: 100%;
	height: 8.7rem;
	margin: 0;
	display: flex;
	align-content: stretch;
	z-index: 2;

	background: #f1f1f1;

	@media (max-width: 486px) {
		background: white;
		height: 5rem;
		position: relative;
		padding-left: 1rem;
		padding-right: 1rem;;
		width: auto;
	}

	&__title {
		font-family: Arial;
		font-style: normal;
		font-weight: normal;
		font-size: 2.61038rem;
		line-height: 30px;
		text-align: center;
		color: #000000;
		@media (max-width: 486px) {
			display: none;
		}
	}

	&__avatar {
		width: 3.481rem;
		height: 3.521rem;
		background-size: cover;
		border-radius: 200px;
		
	}

	&__container {
		margin: auto;
		max-width: 1200px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	&__back {
		&__button {
			background: rgba(0, 0, 0, 0.05);
			border-radius: 1.74011rem;
			font-family: Arial;
			font-style: normal;
			font-weight: normal;
			font-size: 1.9rem;
			line-height: 2.5rem;
			border: 0px;
			color: #000000;
			padding: 0.5rem 1rem;
			cursor: pointer;
			outline: none;
			display: flex;
			align-items: center;

			@media (max-width: 486px) {
				font-size: 1.9rem;
			}

			svg {
					margin-right: 0.4rem;
				@media (max-width: 486px) {
					transform: scale(0.8);
				}
			}
		}
	}
}
</style>
