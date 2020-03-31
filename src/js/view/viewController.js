export default class viewController {
    constructor() {

    }

    displayQuote(quote) {
        const quoteText = document.querySelector("[data-selector='blockquote']");
        quoteText.textContent = quote;
    }

    displayAuthor(author) {
        const quoteAuthor = document.querySelector("[data-selector='author']");
        quoteAuthor.textContent = author;
    }
}