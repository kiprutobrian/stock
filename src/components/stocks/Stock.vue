<template>
	<div class="col-sm-6 col-md-4 my-5">
		<div class="card">
			<div class="card-header">
				<h3 class="card-title">
					{{ stock.name }}
					<small>(Price: {{ stock.price }})</small>
				</h3>
			</div>
			<div class="card-body">
				<div class="float-left">
					<input
						type="number"
						class="form-control"
						placeholder="Quantity"
						v-model="quantity"
						:class="{ danger: insufficientFunds }"
					/>
				</div>
				<div class="float-right">
					<button
						class="btn btn-primary"
						@click="buyStock"
						:disabled="insufficientFunds || quantity <= 0 || isNaN(quantity)"
					>{{insufficientFunds ? 'Insufficient Funds' : 'Buy' }}</button>
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
		insufficientFunds() {
			return this.quantity * this.stock.price > this.funds
		}
	},
	methods: {
		buyStock() {
			const order = {
				stockId: this.stock.id,
				stockPrice: this.stock.price,
				quantity: this.quantity
			}
			this.$store.dispatch('buyStock', order)
			this.quantity = 0
		}
	}
}
</script>
