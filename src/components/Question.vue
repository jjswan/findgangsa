<template>
	<h2 class="accordion-header" id="flush-headingOne">
		<button
			class="accordion-button collapsed"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#flush-collapseOne"
			aria-expanded="false"
			aria-controls="flush-collapseOne"
		>
			{{ title }}
		</button>
	</h2>
	<div
		id="flush-collapseOne"
		class="accordion-collapse collapse"
		aria-labelledby="flush-headingOne"
		data-bs-parent="#accordionFlushExample"
	>
		<div class="accordion-body">
			{{ contents }}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
		},
		title: {
			type: String,
			required: true,
		},
		contents: {
			type: String,
			required: true,
		},
	},
	setup() {
		return {};
	},
};
</script>

<style>
.accordion-item {
	text-align: justify;
}
</style>
