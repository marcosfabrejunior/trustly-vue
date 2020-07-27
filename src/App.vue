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
		this.$store.dispatch('bootstrap');
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

	@media (max-width: 486px){
		font-size: 8px;
		overflow-x: hidden;
	}

	@media (max-width:768px){
		font-size: 7px;
	}

	@media (max-width:986px){
		font-size: 8px;
	}
}



.offset-top{
	height: 8.7rem;
	@media (max-width:486px){
		display: none;
	}
}
</style>
