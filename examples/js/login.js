
const loginConfig = {
    formInputs: [
        { icon: "ri-mail-open-line", type: "email", placeholder: "Enter Your email...", id: "form-email"},
        { icon: "ri-lock-2-line", type: "password", placeholder: "Enter Your password...", id: "form-password" },
    ],
    formTitle: "Sign In",
    formTerms: "You accept the terms and coditions?",
    formError: "An error occured!",
    formButton: "Sign Up",
    formText: "Already have an account?",
    formLink: "Sign Up",
    formPath: "/login",
    type: "login",
};

const login = new SketchUI.Form(loginConfig);
login.createForm();