import axios from 'axios';

export default class modelController {
    constructor(quote, author) {
        this.qoute = "";
        this.author = "";
    }

    async getQuote() {
        try {
            const res = await axios("https://type.fit/api/quotes");
            this.result = res.data;
            console.log(this.result);
            this.id = Math.floor(Math.random() * this.result.length + 1);
            this.quote = this.result[this.id].text;
            this.author = this.result[this.id].author;
            console.log(this.id, this.quote, this.author);
        } catch (error) {
            alert(error);
        }
    }
}