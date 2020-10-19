Vue.component('testimonials-component', {
	template: 
	`
	<div class="testimonials">
		<section class="thumbnails">
			<div v-for="person in people" class="thumbnail__parent">
				<a href="#">
					<img :src="person" alt="" class="thumbnail" @mouseover="updateFeatured(person)" @mouseout="clearTimer"/>
				</a>
			</div>
		</section>
		<section class="featured">
			<div class="featured__testimonial">
				<img :src="featured" alt="" class="featured__image" />
				<h5 class="featured__name">Basit Owaisi</h5>
				<p class="featured__body">Just for fun. Testing testing</p>
				<a href="#" class="featured__btn">More Testimonials</a>
			</div>
		</section>
	</div>
	`,
	data() {
		return {
			people: [],
			featured: null,
			timer: null
		};
	},

	created() {
		people = Array.from({length: 48});
		this.people = people.map(() => `image${Math.floor(Math.random() * 11) + 1}.jpg` );
		this.featured = this.people[0];
	},

	methods: {
		updateFeatured(person) {
			this.timer = setTimeout(() =>	this.featured = person, 200);
		},

		clearTimer() {
			clearTimeout(this.timer);
		}

	}
});




new Vue({
	el: "#app",

})