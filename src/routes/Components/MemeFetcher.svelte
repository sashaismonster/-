<script lang="ts">
    import { onMount } from "svelte";
    interface Meme {
        title: string;
        img: string;
        alt: string;
        year: string;
        month: string;
        day: string;
    }

    let image_description : {data: string; alt: string; title: string; memeImg: string } = {}
    // async function SetUpEvents(): Promise<void> {

    onMount(async () => {
        const mail = "a.golovin@innopolis.university";

        const params = new URLSearchParams({
            email: mail,
        });

        const fetchNumb = await fetch('https://fwd.innopolis.app/api/hw2?' + params.toString());
        const fetchNumberToText = await fetchNumb.text();
        const jokeResponse = await fetch(`https://getxkcd.vercel.app/api/comic?num=${fetchNumberToText}`);
        const meme_description_json: Meme = await jokeResponse.json();

        image_description = {
            data: "Made on " + meme_description_json.day + " " + meme_description_json.month + " " + meme_description_json.year,
            title: meme_description_json.title,
            alt: 'Alternative text: ' + meme_description_json.alt,
            memeImg: meme_description_json.img
        }

    })
</script>

<section id="memefetcher">
    <div class="container-md">
        <h1>Meme of the day goes to:</h1>
        <p><h1>{image_description.title}</h1>
        <p>{image_description.data}</p>
        <p><img src={image_description.memeImg} alt={image_description.alt}></p>
        <p>{image_description.alt}</p>
    </div>
</section>

<style>
    .bgimage {
        height:100vh;
        background: url('$lib/../../../static/images/heroImage.jpeg');
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