<template>
	<div v-if="showPayWithMyBank" class="pay_with_my_bank"></div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import ItemCart from '../models/ItemCart';

const options = Vue.extend({
	components: {},
	props: ["enable", "itemCart"],
});

@Component
export default class PayWithMyBank extends options {
    showPayWithMyBank:Boolean = true;
	constructor() {
		super();

		
	}

	addListener() {
		const _self = this;
		//@ts-ignore
		window.PayWithMyBank.addPanelListener(function (command, event) {
			if (command === "event" && event.type === "new_location") {
				if (event.data.indexOf("#success") === 0) {
					_self.feedback(true);
				} else {
					_self.feedback(false);
				}
				return false;
			}
		});
	}

	createTransaction(cart:ItemCart) {
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

	feedback(status: Boolean) {
		if (status) {
            this.$emit("payment_success");
            this.hide();
		} else {
            this.$emit("payment_cancel");
            this.hide();
		}
    }
    
    hide(){
		this.showPayWithMyBank = false;
		this.enable = false;
	}

	show(){
		this.addListener();
		this.createTransaction(this.itemCart);
		this.showPayWithMyBank = true;
	}


	@Watch('enable')
	onPropertyChanged(value: boolean) {
		if(value){
			this.show();
		}
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
