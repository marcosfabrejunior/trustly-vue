<template>
	<div class="payment_method">
        <div class="payment_method__title">
            {{payment_method.name}}
        </div>
        <div class="payment_method__img">
            <img :src="payment_method.img" alt="">
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
.payment_method{
    // width:100%;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    background-color:white;
    border-radius: 1rem;
    border: solid 1px transparent;
    display: flex;
    justify-content: space-between;

    &__title{
        font-size: 1.6rem;
        
    }

    &.active{
        border: solid 1px #5DAC50;
    }
}
</style>
