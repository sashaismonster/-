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

const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header?.classList.add('navbarDark');
    }
    else {
        header?.classList.remove('navbarDark');
    }
}
