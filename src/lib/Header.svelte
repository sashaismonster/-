<script lang="ts">
    const header = document.querySelector('.navbar');

    window.onscroll = function() {
        var top = window.scrollY;
        if(top >= 100) {
            header?.classList.add('navbarDark');
        }
        else {
            header?.classList.remove('navbarDark');
        }
    }
</script>

<header>
    <nav class="navbar">
        <div class="container">
            <a class="navbar-brand" href="#">Sasha</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" style="color: #0d6efd">V</span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
</header>

<style>
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
    .navbar{
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
</style>