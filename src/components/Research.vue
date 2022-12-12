<template>
	<div>
		<form action="" class="search_form">
			<input type="text" placeholder="찾는 분야를 입력하세요." />
			<button type="submit" class="search_btn">검색</button>
		</form>
	</div>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style>
.search_form {
	margin-top: 20px;
	text-align: center;
}
.search_btn {
	margin-left: 10px;
}
</style>
