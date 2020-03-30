import axios from 'axios';

export default async function getResults() {
    const res = await axios("https://type.fit/api/quotes");
    console.log(res);
}