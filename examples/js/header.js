const headerConfig = {
    logoImage: "assets/logo-image-1.svg",
    logoUrl: "/",
    links: [
        { text: "Home", url: "#" },
        { text: "About us", url: "#" },
        { text: "Services", url: "#" },
        { text: "Contact us", url: "#" },
        { text: "Blog", url: "#" },
    ],
    buttons: [
        { icon: "ri-search-line", id: "search-toggle" },
        { icon: "ri-user-3-line", id: "profile" },
    ],
    buttonText: "Começar",
};

const header = new SketchUI.Header(headerConfig);
header.createHeader();