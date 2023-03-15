<script lang="ts">
    export interface Meme {
        num: number;
        title: string;
        img: string;
        alt: string;
        year: number;
        month: number;
        day: number;
    }

    async function SetUpEvents(): Promise<void> {
        const getJokeBtn = document.getElementById('get-joke-btn');
        const numField = document.getElementById('num');
        const title = document.getElementById('title');
        const date = document.getElementById('date');
        const alt = document.getElementById('alt');
        const memeImg = document.getElementById('memeImg') as HTMLImageElement;

        function fetchNum(mail: string): Promise<string | void> {
            const params = new URLSearchParams();
            params.append('email', mail);
            return fetch('https://fwd.innopolis.app/api/hw2?' + params.toString())
                .then(r => r.text())
                .catch(err => console.log(err));
        }

        function fetchMeme(num: string | void): Promise<Meme> {
            const params = new URLSearchParams();
            if (typeof num === "string") {
                params.append('num', num);
            }
            return fetch('https://getxkcd.vercel.app/api/comic?' + params.toString())
                .then(r => r.json())
                .catch(err => console.log(err));
        }

        if (numField && date && title && alt) {
            numField.textContent = 'Loading...';
            const mail = "a.golovin@innopolis.university";
            const num = await fetchNum(mail);
            const meme = await fetchMeme(num);
            const event = new Date(meme.year, meme.month-1, meme.day);
            const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            date.textContent = "Made on " + event.toLocaleDateString('en-EN', options);
            numField.textContent = "Unique ID: " + num; // Note: never use innerHTML for unsanitized input you don't control
            title.textContent = meme.title;
            memeImg.alt = meme.alt;
            memeImg.src = meme.img;
            alt.textContent = 'Alternative text: ' + meme.alt;
        }
    }

    window.onload = function() {
        SetUpEvents();
    }
</script>

<section id="memefetcher">
    <div class="container-md">
        <h1>Meme of the day goes to:</h1>
        <p id="num"></p>
        <p><h1 id="title"></h1>
        <p id="date"></p>
        <p><img id="memeImg"></p>
        <p id="alt"></p>
    </div>
</section>

<style>
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