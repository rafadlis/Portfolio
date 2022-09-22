class mainNav extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <nav class="full-width flex row auto-gap midle">
            <div class="flex row gap-4x midle">
                <a href="index.html">
                    <div class="logo">
                        <p>RD</p>
                    </div>
                </a>
                <div class="flex row gap-4x midle">
                    <div class="menu flex center"><a href="comingSoon.html">Portofolio</a><img src="images/icons/Chevron right.svg" alt=""></div>
                    <div class="menu flex center"><a href="comingSoon.html">Proyek</a><img src="images/icons/Chevron right.svg" alt=""></div>
                    <div class="menu flex center"><a href="comingSoon.html">Blog</a></div>
                    <div class="menu flex center"><a href="comingSoon.html">Kontak</a></div>
                </div>
            </div>
            <div id="nav_right_side" class="flex row no-gap midle">
                <a class="button button_lm flex center">EN</a>
                <a class="button button_lm flex center" id="ln_selected">ID</a>
            </div>
        </nav>
        `;
    }
}
window.customElements.define('main-nav', mainNav);

