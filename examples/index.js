const headerConfig = {
    logoText: "Cosmic",
    logoUrl: "/",
    links: [
        { text: "Home", url: "#" },
        { text: "About us", url: "#" },
        { text: "Services", url: "#" },
        { text: "Contact us", url: "#" },
        { text: "Blog", url: "#" },
    ],
    buttons: [
        { icon: "ri-search-line", id: "search" },
        { icon: "ri-user-3-line", id: "profile" },
    ],
    buttonText: "Começar",
};

const header = new SketchUI.Header(headerConfig);
header.createHeader();

const formConfig = {
    inputs: [
        { icon: "ri-user-3-line", type: "name", placeholder: "Enter your username..." },
        { icon: "ri-mail-line", type: "email", placeholder: "Enter Your email..." },
        { icon: "ri-lock-2-line", type: "password", placeholder: "Enter Your password..." },
    ],
    formTitle: "Criar Conta",
    formTerms: "You accept the terms and coditions?",
    formError: "An error occured!",
    formButton: "Registrar",
    formText: "Already have an account?",
    formLink: "Entrar"
};

const form = new SketchUI.Form(formConfig);
form.createForm();