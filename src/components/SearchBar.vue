<template>
	<div class="searchbar">
		<div class="searchbar__icon">
			<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M21.8657 20.5695L15.4749 14.1787C16.687 12.6822 17.4167 10.7797 17.4167 8.70836C17.4167 3.9066 13.5101 0 8.70832 0C3.90655 0 0 3.9066 0 8.70836C0 13.5101 3.9066 17.4167 8.70837 17.4167C10.7797 17.4167 12.6822 16.687 14.1787 15.4749L20.5695 21.8658C20.7486 22.0447 21.0387 22.0447 21.2178 21.8658L21.8658 21.2177C22.0447 21.0387 22.0447 20.7485 21.8657 20.5695ZM8.70837 15.5834C4.91727 15.5834 1.83335 12.4995 1.83335 8.70836C1.83335 4.91727 4.91727 1.83335 8.70837 1.83335C12.4995 1.83335 15.5834 4.91727 15.5834 8.70836C15.5834 12.4995 12.4995 15.5834 8.70837 15.5834Z"
					fill="#787878"
				/>
			</svg>
		</div>
		<div class="searchbar__field">
			<input
				:placeholder="placeholder"
				type="text"
				class="searchbar__field--input"
				v-model="term"
				v-on:input="$emit('search_string', term)"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

const options = Vue.extend({
	components: {},
	props: ["placeholder"],
});

@Component
export default class SearchBar extends options {
	term: String = "";
}
</script>

<style lang="scss">
.searchbar {
	width: 100%;
	display: flex;
	align-items: center;
	margin-top: 3rem;
	margin-bottom: 3rem;
	padding-bottom: 0.5rem;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	border-bottom: 1px solid #bdbdbd;

	@media (max-width: 486px) {
		margin-left: 2rem;
		margin-right: 2rem;
	}

	&__icon {
		margin-right: 1.5rem;
	}

	&__field {
		width: 100%;

		&--input {
			width: 100%;
			height: 3rem;
			font-size: 1.7rem;
			border: 0;
			outline: 0;
		}
	}
}
</style>
