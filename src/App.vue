<template>
	<div id="app">
		<top-bar :avatarImage="client.avatarImage" :title="$route.name" />
		<div class="offset-top"></div>
		<router-view />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TopBar from "@/components/TopBar.vue";

@Component({
	components: {
		"top-bar": TopBar,
	},
})
export default class App extends Vue {

	constructor(){
		super();
		this.$store.dispatch('get_client');
	}

	get client(){
		return this.$store.getters.client;
	}
}
</script>

<style lang="scss">
html,
body {
	font-size: 10px;
	margin: 0;
}

.offset-top{
	height: 8.7rem;
}
</style>
