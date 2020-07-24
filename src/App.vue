<template>
	<div id="app">
		<top-bar :avatarImage="avatarImage" :title="$route.name" />
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

	get avatarImage(){
		return "https://s3-alpha-sig.figma.com/img/76c0/3f58/3b70eb4dfa556b26490c7a00d6ea6662?Expires=1596412800&Signature=gLmj3kHDQXy80DUY4XpZXWwodqe-GotplBjPkgY36YsudJiLAV8XGf-BVi3oOmMxRgMJmpyZaH0ODGkLa8N0aGgINtUkiG~8lsph338X13hiJHHtYfILsGIvCUcVY8Gjc2J~gLy8i9--KS1hcJxsExg09LRrNa3koLxp21Gpz7dNUVnwtptR8wpP9N2yLweFrOi1gmmHgOndO4Vo7cfHZTw1eniIKX8BsMQCMlt9Gl98np9gfIw7qAga0rrPsRDconpCyZPP2v0YV7RrKzzC5IPo7exbR8CLk1uJp4d5T6zTpAZKKZoAwKL~L5in3TP~BBw8WNvGTHpD6HXB3gv3DA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
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
