<template>
	<div>
		<div
			id="carouselExampleIndicators"
			class="carousel slide"
			data-bs-ride="true"
		>
			<div class="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="0"
					class="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="3"
					aria-label="Slide 4"
				></button>
			</div>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img
						src="../assets/adbackground0.jpg"
						class="ad d-block w-100"
						alt="강사모집"
					/>{{ first }}
				</div>
				<div class="carousel-item" v-for="ad in ads" :key="ad.id">
					<Ad_contents :title="ad.title"></Ad_contents>
				</div>
			</div>
			<button
				class="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="prev"
			>
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button
				class="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="next"
			>
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	</div>
</template>

<script>
import Ad_contents from './Ad_contents.vue';
import { reactive, ref } from 'vue';

export default {
	components: {
		Ad_contents,
	},

	setup() {
		const first = ref('');
		const ads = reactive([
			{
				id: 1,
				title: '개포초 메타버스 강사(6학년)',
			},
			{
				id: 2,
				title: '포이초 방송댄스 강사(5학년)',
			},
			{
				id: 3,
				title: '매헌초 소금 강사(6학년)',
			},
		]);
		return { ads, first };
	},
};
</script>

<style lang="scss" scoped></style>
