<template>
	<img
		src="../assets/adbackground1.jpg"
		class="ad d-block w-100"
		alt="강사후기"
	/>
	{{ title }}
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
.ad {
	height: 350px;
	border-radius: 10px;
}
</style>
