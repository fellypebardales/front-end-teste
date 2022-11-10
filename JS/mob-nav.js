class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
      }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".menu-mobile",
    ".cabecalho__nav--lista",
    ".cabecalho__nav--lista li",
);
mobileNavbar.init();


document.addEventListener("scroll", function() {
    var posicaoy = window.pageYOffset;
    if (posicaoy == 0) {
        nav.style.backgroundColor = "";
        nav.style.opacity = "1.0";
        setInterval(1000);
    } else {
        nav.style.backgroundColor = "#30303075";
        nav.style.opacity = "0.7";
        setInterval(1000);
    }
});
