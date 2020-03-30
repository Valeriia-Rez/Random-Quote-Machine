import axios from 'axios';

async function getResults() {
    const res = await axios("https://150000-quotes.p.rapidapi.com/random?key=5adac89164msh5f363b79c62ad6ep1d5d53jsn6598a13827c2");
    console.log(res);


}

getResults();