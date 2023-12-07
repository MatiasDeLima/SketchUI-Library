const registerConfig = {
    formInputs: [
        { icon: "ri-user-3-line", type: "email", placeholder: "Enter Your name...", id: "form-name"},
        { icon: "ri-mail-open-line", type: "password", placeholder: "Enter Your email...", id: "form-email" },
        { icon: "ri-lock-2-line", type: "password", placeholder: "Enter Your password...", id: "form-password" },
    ],
    formTitle: "Sign Up",
    formTerms: "You accept the terms and coditions?",
    formError: "An error occured!",
    formButton: "Sign Up",
    formText: "Already have an account?",
    formLink: "Sign In",
    formPath: "/register",
    type: "register",
};

const register = new SketchUI.Form(registerConfig);
register.createForm();