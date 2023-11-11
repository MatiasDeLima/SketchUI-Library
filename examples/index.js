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

const heroConfig = {
    heroImg: "./assets/hero-image.svg",
    heroTitle: "Encontre o Cuidado <br>de Saúde que Você Merece",
    heroText: "MediConsulta é o seu destino confiável para encontrar médicos, especialistas e clínicas de saúde próximos a você. ",
    heroButton: "Get Started"
}

const hero= new SketchUI.Hero(heroConfig);
hero.createHero();