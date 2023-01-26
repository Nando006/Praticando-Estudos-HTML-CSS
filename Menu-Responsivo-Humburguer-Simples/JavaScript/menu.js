class MenuResponsivo {
    constructor(menuRES) {
        this.menuRES = document.querySelector(menuRES);
        this.activeClass = 'active';

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.menuRES.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.menuRES.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.menuRES) {
            this.addClickEvent();
        }
        return this;
    }
}

const menuresponsivo = new MenuResponsivo(
    "#menu",
);
menuresponsivo.init();