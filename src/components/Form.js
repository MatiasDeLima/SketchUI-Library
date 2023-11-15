/*############### FORM COMPONENT ###############*/
export class Form {
    constructor(options) {
        const {
            formInputs = [],
            formTitle = "",
            formTerms = "",
            formError = "",
            formButton = "",
            formText = "",
            formLink = ""
        } = options;

        this.formInputs = formInputs;
        this.formTitle = formTitle;
        this.formTerms = formTerms;
        this.formError = formError;
        this.formButton = formButton;
        this.formText = formText;
        this.formLink = formLink;
    }

    createForm() {
        const form = document.querySelector(".form");

        const inputsArray = this.formInputs
            .map((input) => `
                <div class="form__input">
                    <i class="${input.icon}"></i>
                    <input type="${input.type}" placeholder="${input.placeholder}" class="input">
                </div>
            `).join("");

        form.innerHTML = `
            <h3 class="form__title">${this.formTitle}</h3>

            <div class="form__inputs">${inputsArray}</div>

            <div class="form__terms">
                <input type="checkbox" class="checkbox">
                <p class="form_terms-text">${this.formTerms}</p>
            </div>

            <p class="form__error">${this.formError}</p>

            <button class="button form__button">${this.formButton}</button>

            <p class="form__text">${this.formText} <a href="" class="form__link">${this.formLink}</a></p>
        `;
    }
}
