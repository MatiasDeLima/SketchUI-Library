/*############### FORM COMPONENT ###############*/
export class Form {
    constructor(options) {
        const {
            formInputs,
            formTitle,
            formTerms,
            formError,
            formButton,
            formText,
            formLink,
            formPath,
        } = options;

        this.formInputs = formInputs;
        this.formTitle = formTitle;
        this.formTerms = formTerms;
        this.formError = formError;
        this.formButton = formButton;
        this.formText = formText;
        this.formLink = formLink;
        this.formPath = formPath;
    }

    createForm() {
        const formClass = document.querySelector(".form");

        const inputsArray = this.formInputs
            .map((input) => `
                <div class="form__input">
                    <i class="${input.icon}"></i>
                    <input type="${input.type}" placeholder="${input.placeholder}" class="input" id="${input.id}">
                </div>
            `).join("");

        formClass.innerHTML = `
            <h3 class="form__title">${this.formTitle}</h3>

            <div class="form__inputs">
                ${inputsArray};
            </div>

            <div class="form__terms">
                <input type="checkbox" class="checkbox" id="form-checkbox">
                <p class="form_terms-text">${this.formTerms}</p>
            </div>

            <p class="form__error" id="form-error"></p>

            <button class="button form__button">${this.formButton}</button>

            <p class="form__text">${this.formText}<a href="" class="form__link">${this.formLink}</a></p>
        `;

        const form = document.getElementById("form"),
            formName = document.getElementById("form-name"),
            formEmail = document.getElementById("form-email"),
            formPassword = document.getElementById("form-password"),
            formCheckbox = document.getElementById("form-checkbox"),
            formError = document.getElementById("form-error");

        const formSubmit = (e) => {
            e.preventDefault();

            if (formName.value.length < 3) {
                error("error")
            } else if (!formEmail.value.length) {
                error("Invalid email");
            } else if (!formPassword.value.length) {
                error("Invalid password");
            } else if (!formCheckbox.checked) {
                error("Acept the terms and coditions!");
            } else {
                sendData(`"${this.formPath}"`,{
                    username: formName.value,
                    email: formEmail.value,
                    password: formPassword.value,
                    checkbox: formCheckbox.checked,
                });
            }
        }

        form.addEventListener("submit", formSubmit);

        const error = (err) => {
            formError.innerText = err;
            formError.classList.add("show-form-error")

            setTimeout(() => {
                formError.innerHTML = "";
            }, 3000)
        }

        const sendData = (path, data) => {
            console.log(data);

            fetch(path, {
                method: "POST",
                headers: new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify(data)
            }).then(res => res.json())
            .then(data => processData(data));
        }

        const processData = (data) => {
            console.log(data);
        }
    }
}
