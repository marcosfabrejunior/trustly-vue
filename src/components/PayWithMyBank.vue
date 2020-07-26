<template>
	<div class="pay_with_my_bank"></div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

const options = Vue.extend({
	components: {},
	props: ["step"],
});

@Component
export default class PayWithMyBank extends options {
	constructor() {
		super();

		setTimeout(() => {
			this.addListener();
			this.createTransaction();
		}, 400);
	}

	addListener() {
		//@ts-ignore
		window.PayWithMyBank.addPanelListener(function (command, event) {
			if (command === "event" && event.type === "new_location") {
				if (event.data.indexOf("#success") === 0) {
					alert("success!");
				} else {
					alert("cancel!");
				}
				return false;
			}
		});
	}

	createTransaction() {
		//@ts-ignore
		window.PayWithMyBank.establish({
			accessId: "D61EC9BAF0BB369B9438",
			merchantId: "1004314986",
			metadata: { demo: "enabled" },
			currency: "USD",
			paymentType: "Deferred",
			amount: "100.00",
			description: "your@email.here",
			merchantReference: "123456",
			returnUrl: "#success",
			cancelUrl: "#cancel",
		});
	}
}
</script>

<style lang="scss">
.pay_with_my_bank {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.75);
	z-index: 10;
}
</style>
