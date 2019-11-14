<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<router-link to="/">
			<a class="navbar-brand">Stock Trader</a>
		</router-link>
		<div class="collapse navbar-collapse">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<router-link to="/portfolio">
						<a class="nav-link">Portfolio</a>
					</router-link>
				</li>
				<li class="nav-item active">
					<router-link to="/stocks">
						<a class="nav-link">Stocks</a>
					</router-link>
				</li>
			</ul>
			<ul class="navbar-nav ml-auto">
				<li>
					<a class="nav-link" href="#">End Day</a>
				</li>
				<li class="nav-item dropdown">
					<a
						class="nav-link dropdown-toggle"
						href="#"
						id="navbarDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Save & Load
						<span class="caret"></span>
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="#">Save Data</a>
						<a class="dropdown-item" href="#">Load Data</a>
					</div>
				</li>
				<li>
					<strong class="nav-link">Funds: {{ funds }}</strong>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	computed: {
		funds() {
			return this.$store.getters.funds
		}
	}
}
</script>
