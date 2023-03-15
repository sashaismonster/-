<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";
  import MemeFetcher from "./lib/MemeFetcher.svelte";
</script>

<Header />

<main>
  <section class="bgimage" id="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
          <h2 class="hero_title">It's me, hi, I'm your problem it's me</h2>
          <p class="hero_desc">I am Sasha, a front-end developer from Innopolis</p>
        </div>
      </div>
    </div>
  </section>
  <section id="about">
    <div class="container mt-4 pt-4">
      <h1 class="text-center">About Me</h1>
      <div class="row mt-4">
        <div class="col-lg-4">
          <img src="images/about.jpeg" class= "imageAboutPage" alt="">
        </div>

        <div class="col-lg-8">
          <p> As a professional front-end programmer, Alexander Golovin possesses a strong set of technical skills and a passion for delivering high-quality user experiences through cutting-edge web development. With his experience in both web development and data science, he brings a unique combination of technical and creative abilities to his work. Whether creating visually appealing and functional user interfaces or developing complex, data-driven web applications, Alexander is driven by a commitment to delivering exceptional results for his clients. With his attention to detail and dedication to continuous learning, he is well-equipped to tackle the challenges of the constantly evolving world of web development.

          </p>

          <div class="row mt-3">
            <p> As a front-end programmer, Alexander Golovin's stack of technologies likely includes:
              <br> <br>
              HTML: for creating the structure and content of web pages
              <br>CSS: for styling and layout of web pages
              <br>JavaScript: for adding interactivity and dynamic behavior to web pages
              <br>React: a popular JavaScript library for building user interfaces
              <br>Redux: a library for managing state in React applications
              <br>Git: a version control system for tracking changes in source code
              <br>npm or yarn: package managers for installing and managing packages used in a project
              <br>Webpack or Babel: tools for bundling and transpiling code to run in different browsers</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <MemeFetcher />
  <section id="portfolio">
    <div class="container mt-3">
      <h1 class="text-center">Portfolio</h1>
      <div class="row">
        <div class="col-lg-4 mt-4">
          <div class="card">
            <img class="card-img-top" src="images/portfolioImage1.jpg" alt="Card image" style="width:100%">
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
            <img class="card-img-top" src="images/portfolioImage4.jpg" alt="Card image" style="width:100%">
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
            <img class="card-img-top" src="images/portfolioImage3.jpg" alt="Card image" style="width:100%">
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
  <section id="contact">
    <div class="container mt-3 contactContent">
      <h1 class="text-center">Contact Me</h1>

      <div class="row mt-4">
        <div class="col-lg-6">

          <div style="overflow:hidden;resize:none;max-width:100%;width:500px;height:500px;">
            <div id="my-map-canvas" style="height:100%; width:100%;max-width:100%;">
              <iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Innopolis,+Республика+Татарстан,+Россия&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
            </div>
            <a class="googl-ehtml" rel="nofollow" href="https://www.bootstrapskins.com/themes" id="authorize-maps-data">premium bootstrap themes</a>
            <style>#my-map-canvas img.text-marker{max-width:none!important;background:none!important;}img{max-width:none}</style></div>
        </div>

        <div class="col-lg-6">

          <form>
            <input type="text" class="form-control form-control-lg" placeholder="Name">
            <input type="email" class="form-control mt-3" placeholder="Email">
            <div class="mb-3 mt-3">
              <textarea class="form-control" rows="5" id="comment" name="text" placeholder="Project Details"></textarea>
            </div>
          </form>
          <button type="button" class="btn btn-success mt-3"><a href="https://github.com/sashaismonster" target="_blank" id="gh-link"></a>Text Me</button>
          <br><p >And I will contact you soon!</p>
        </div>

      </div>
    </div>
  </section>
</main>

<Footer/>

<style>
  .logo {
    height: 3em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 1em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 1em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
  .bgimage {
    height:100vh;
    background: url('images/heroImage.jpeg');
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
    background-color: #242424;
  }
  .social-icons {
    font-size: 36px;
    cursor: pointer;
  }
  .fa-facebook:hover,.fa-instagram:hover,.fa-twitter:hover,.fa-linkedin:hover, .fa-github:hover {
    color: #008000;
  }
  .fab {
    color: #000000;
  }
  /* footer styling */
  .footer {
    background-color: #808080;
    text-align: center;
  }
</style>