<script>
	import img1 from "$lib/images/portfolioImage1.jpg";
	import img3 from "$lib/images/portfolioImage3.jpg";
	import img4 from "$lib/images/portfolioImage4.jpg";
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="ABout me and my achievents" />
</svelte:head>

<section id="portfolio">
	<div class="container mt-3">
		<h1 class="text-center">Portfolio</h1>
		<div class="row">
			<div class="col-lg-4 mt-4">
				<div class="card">
					<img class="card-img-top" src={img1} alt="Card image" style="width:100%">
					<div class="card-body">
						<h4 class="card-title">Calculator</h4>
						<p class="card-text">User can be able to do following:
						<ul>
							<li> Perform different operations like addition, Subtraction, Multiplication, and Division.</li>
							<li>Enter data and get result on display screen.</li>
						</ul>
						<div class="text-center">
							<a href="#" class="btn btn-success">Link</a>
						</div>
					</div>
				</div>
			</div>

			<div class="col-lg-4 mt-4">
				<div class="card portfolioContent">
					<img class="card-img-top" src={img4} alt="Card image" style="width:100%">
					<div class="card-body">
						<h4 class="card-title">Quiz App</h4>
						<p class="card-text">User can be able to do following:
						<ul>
							<li>Select option from multiple choices.</li>
							<li> Get the result of the question as correct or incorrect.</li>
						</ul>
						<div class="text-center">
							<a href="#" class="btn btn-success">Link</a>
						</div>
					</div>
				</div>
			</div>

			<div class="col-lg-4 mt-4">
				<div class="card portfolioContent">
					<img class="card-img-top" src={img3} alt="Card image" style="width:100%">
					<div class="card-body">
						<h4 class="card-title">Product Landing Page</h4>
						<p class="card-text">Before diving into the code, take some time to plan this out. Columns will be used on a product landing page, and the components of the landing page will be aligned within them. This also covers basic editing tasks such as cropping images and using design templates.</p>
						<div class="text-center">
							<a href="#" class="btn btn-success">Link</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.bgimage {
		height:100vh;
		background-size:cover;
		position:relative;
	}
	.hero_title {
		font-size: 4.5rem;
	}
	.hero_desc {
		font-size: 2rem;
	}
	.hero-text {
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
	}
	.imageAboutPage {
		width: 100%;
	}
	.navbarScroll.navbarDark {
		background-color: black;
	}
	.navbar {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}
	.social-icons {
		font-size: 36px;
		cursor: pointer;
	}
	.fa-facebook:hover,.fa-instagram:hover,.fa-twitter:hover,.fa-linkedin:hover, .fa-twitch:hover {
		color: #008000;
	}
	.fab {
		color: #000000;
	}
	/* footer styling */
	#footer {
		background-color: #808080;
		text-align: center;
	}
</style>