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
						src="../assets/gangsa1.jpg"
						class="ad d-block w-100"
						alt="강사후기"
					/>
				</div>
				<div class="carousel-item" v-for="review in reviews" :key="review.id">
					<Review_contents
						:title="review.title"
						:contents="review.contents"
					></Review_contents>
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
import Review_contents from './Review_contents.vue';
import { reactive } from 'vue';

export default {
	components: {
		Review_contents,
	},

	setup() {
		const reviews = reactive([
			{
				id: 1,
				title: '장구강사 홍길동',
				contents: '포이초등학교 후기',
			},
			{
				id: 2,
				title: '연극강사 킹세종',
				contents: '개포초등학교 후기',
			},
			{
				id: 3,
				title: '축구강사 차들히',
				contents: '매헌초등학교 후기',
			},
		]);
		return { reviews };
	},
};
</script>

<style lang="scss" scoped></style>
