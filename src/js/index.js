import "regenerator-runtime/runtime";
import "../scss/main.scss";

import modelController from "./model/modelController";
import viewController from "./view/viewController";

const model = new modelController();
const view = new viewController();

const randomQuote = async() => {
    await model.getQuote();
    if (model.quote && model.author) {
        view.displayQuote(model.quote);
        view.displayAuthor(model.author);
    }
}

document.querySelector("[data-selector='button']").addEventListener("click", randomQuote);