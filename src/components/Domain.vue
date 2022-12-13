<template>
	<div>
		<div
			class="container text-center d-flex flex-column justify-content-center .text-wrap fw-bold"
		>
			<div class="row introduction">
				<div class="col intro">
					<p class="typingEffect">완벽한 강사를 찾다, FINDGANGSA</p>
				</div>
			</div>
			<div class="row administer">
				<div class="col join">
					<router-link to="/">
						<button type="button" class="btn btn-warning btn-lg fw-bold fs-5">
							회원가입
						</button>
					</router-link>
				</div>
				<div class="col login">
					<button type="button" class="btn btn-warning btn-lg fw-bold fs-5">
						로그인
					</button>
				</div>
			</div>
			<div class="row service">
				<div class="col">
					<p class="research">강사검색</p>
					<Research></Research>
				</div>
				<div class="col">
					<p class="review">강사후기</p>
					<Review></Review>
					<button class="more">더보기</button>
				</div>
				<div class="col advertise">
					<p class="adver">강사 모집공고</p>
					<Ad></Ad>
					<button class="more">더보기</button>
				</div>
				<div class="col">
					<p class="que">문의사항</p>
					<div class="accordion accordion-flush" id="accordionFlushExample">
						<div
							v-for="question in questions"
							:key="question.id"
							class="accordion-item"
						>
							<Question
								:title="question.title"
								:contents="question.contents"
							></Question>
						</div>
						<button class="more">더보기</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Research from './Research.vue';
import Review from './Review.vue';
import Ad from './Ad.vue';
import Question from './Question.vue';
import { reactive } from 'vue';

export default {
	components: {
		Research,
		Review,
		Ad,
		Question,
	},

	setup() {
		const questions = reactive([
			{
				id: 1,
				title: '강사 스케줄은 어떻게 확인하나요?',
				contents:
					'해당 강사를 검색하면 강사 소개를 보실 수 있습니다. 그 중 "스케줄"을 클릭하시면 확인할 수 있습니다.',
			},
			{
				id: 2,
				title: '강사의 개인 연락처를 알 수 있나요?',
				contents:
					'강사가 개인 연락처를 공개했다면 강사 소개에서 보실 수 있습니다. 개인 연락처를 공개하지 않았다면 강사에게 직접 글이나 메시지를 남겨주세요.',
			},
		]);

		return { questions };
	},
};
</script>

<style>
.administer {
	background-color: #dcdcdc;
}
.service {
	background-image: linear-gradient(
		to top,
		#bdc2e8 0%,
		#bdc2e8 1%,
		#e6dee9 100%
	);
}
.more {
	margin-top: 20px;
}
.adver {
	display: inline-block;
	margin-top: 30px;
	margin-bottom: 30px;
}
.research {
	display: inline-block;
	margin-top: 30px;
	margin-bottom: 20px;
}
.que {
	display: inline-block;
	margin-top: 30px;
	margin-bottom: 30px;
}
.review {
	display: inline-block;
	margin-top: 30px;
	margin-bottom: 30px;
}
.intro {
	background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
	padding: 20px;
	height: 300px;
	color: black;
	display: flex;
	margin: auto;
	align-items: center;
}
.typingEffect {
	width: 0;
	overflow: hidden; /* Ensure the text is not visible until the typewriter effect*/
	border-right: 2px solid #fbed96 100%; /* The cursor*/
	font-size: 24px;
	white-space: nowrap; /* Keeps the text on a single line */
	animation: typing 4.5s forwards;
	display: inline-block;
}
.login {
	margin: auto;
}
.join {
	margin: auto;
}

/* The typing animation */
@keyframes typing {
	from {
		width: 0;
	}
	to {
		width: 100%;
	}
}
</style>
