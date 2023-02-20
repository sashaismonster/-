async function SetUpEvents() {  
    const getJokeBtn = document.getElementById('get-joke-btn');
    const numField = document.getElementById('num');
    const title = document.getElementById('title');
    const date = document.getElementById('date');
    const alt = document.getElementById('alt');
    const memeImg = document.getElementById('memeImg');
                
    function fetchNum(mail) {
        const params = new URLSearchParams();
        params.append('email', mail);
        return fetch('https://fwd.innopolis.app/api/hw2?' + params.toString())
           .then(r => r.text())
           .catch(err=>console.log(err));
    }
                
    function fetchMeme(num) {
       const params = new URLSearchParams();
       params.append('num', num);
       return fetch('https://getxkcd.vercel.app/api/comic?' + params.toString())
           .then(r => r.json())
           .catch(err=>console.log(err));;
    }

    numField.textContent = 'Loading...';
    const mail = "a.golovin@innopolis.university";
    const num = await fetchNum(mail);
    const meme = await fetchMeme(num);
    const event = new Date(Date.UTC(meme.year, meme.month, meme.day, 0, 0, 0));
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    date.textContent = "Made on " + event.toLocaleDateString('en-EN', options);
    numField.textContent = "Unique ID: " + num; // Note: never use innerHTML for unsantized input you don't control
    title.textContent = meme.title;
    memeImg.alt = meme.alt;
    memeImg.src = meme.img;
    alt.textContent = 'Alternative text: ' + meme.alt;  
}

window.onload = function() {
    SetUpEvents();
}