/*############### HEADER COMPONENT ###############*/
export class Header {
    constructor(config) {
        const {
            logoText = "",
            logoUrl = "",
            links = [],
            buttons = [],
            buttonText = ""
        } = config;

        this.logoText = logoText;
        this.logoUrl = logoUrl;
        this.links = links;
        this.buttons = buttons;
        this.buttonText = buttonText;

        // Variável privada para rastrear o estado do menu
        this.menuVisible = false;
    }

    _toggleMenu() {
        const navMenu = document.getElementById("nav-menu");
        this.menuVisible = !this.menuVisible;
        if (navMenu) {
            navMenu.classList.toggle("show-menu", this.menuVisible);
        }
    }

    _closeMenu() {
        const navMenu = document.getElementById("nav-menu");
        this.menuVisible = false;
        if (navMenu) {
            navMenu.classList.remove("show-menu");
        }
    }

    createHeader() {
        const header = document.querySelector(".header");

        const linksHTML = this.links
            .map((link) => `
                <li class="nav__item">
                    <a href="${link.url}" class="nav__link">${link.text}</a>
                </li>
            `
            ).join("");

        const buttonsHTML = this.buttons
            .map((button) => `
                <div id="${button.id}">
                    <i class="${button.icon}"></i>                
                </div>
            `).join("");

        header.innerHTML = `
            <header class="header">
                <nav class="nav container">
                    <a href="${this.logoUrl}" class="nav__logo">${this.logoText}</a>

                    <div class="nav__menu" id="nav-menu">
                        <ul class="nav__list">
                            ${linksHTML}
                        </ul>

                        <div class="nav__close" id="nav-close">
                            <i class="ri-close-line"></i>
                        </div>
                    </div>

                    <div class="nav__buttons">
                        <button class="button nav__button">${this.buttonText}</button>

                        <ul class="nav__icons">
                            ${buttonsHTML}

                            <div class="nav__toggle" id="nav-toggle">
                                <i class="ri-menu-line"></i>
                            </div>
                        </ul>
                    </div>
                </nav>
            </header>
        `;


        // Adicione event listeners para os métodos privados do componente
        const navToggle = document.getElementById("nav-toggle");
        const navClose = document.getElementById("nav-close");

        if (navToggle) {
            navToggle.addEventListener("click", this._toggleMenu.bind(this));
        }

        if (navClose) {
            navClose.addEventListener("click", this._closeMenu.bind(this));
        }
    }
}
