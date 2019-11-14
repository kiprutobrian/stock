<template>
	<div class="col-sm-6 col-md-5 my-5">
		<div class="card">
			<div class="card-header">
				<h3 class="card-title">
					{{ stock.name }}
					<small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
				</h3>
			</div>
			<div class="card-body">
				<div class="float-left">
					<input
						type="number"
						class="form-control"
						placeholder="Quantity"
						v-model="quantity"
						:class="{ danger: insufficientQuantity }"
					/>
				</div>
				<div class="float-right">
					<button
						class="btn btn-danger"
						@click="sellStock"
						:disabled="insufficientQuantity || quantity <= 0 || isNaN(quantity)"
					>{{insufficientQuantity ? 'Insufficient Quantity' : 'Sell' }}</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.danger {
	border: 1px solid red;
}
</style>

<script>
import { mapActions } from 'vuex'
export default {
	props: ['stock'],
	data() {
		return {
			quantity: 0
		}
	},
	computed: {
		funds() {
			return this.$store.getters.funds
		},
		insufficientQuantity() {
			return this.quantity > this.stock.quantity
		}
	},
	methods: {
		...mapActions({
			placeSellOrder: 'sellStock'
		}),
		sellStock() {
			const order = {
				stockId: this.stock.id,
				stockPrice: this.stock.price,
				quantity: this.quantity
			}
			this.placeSellOrder(order)
		}
	}
}
</script>
