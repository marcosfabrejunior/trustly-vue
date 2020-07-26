<template>
	<div class="topbar">
		<div class="topbar__container">
			<div class="offset"></div>
			<div class="topbar__title">{{title}}</div>
			<div :style="avatarImageStyle" class="topbar__avatar"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

const options = Vue.extend({
	components: {},
	props: ["avatarImage","title"],
});

@Component
export default class TopBar extends options {
	constructor() {
		super();
	}

	get avatarImageStyle() {
		return {backgroundImage: `url(${this.avatarImage})`};
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

	&__title {
		font-family: Arial;
		font-style: normal;
		font-weight: normal;
		font-size: 2.61038rem;
		line-height: 30px;
		text-align: center;
		color: #000000;
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
}
</style>
