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
                    <div class="menu"><a href="comingSoon.html">Saiapa Aku?</a></div>
                    <div class="menu"><a href="comingSoon.html">Proyek</a></div>
                    <div class="menu"><a href="comingSoon.html">Kontak</a></div>
                </div>
            </div>
            <div id="nav_right_side" class="flex row no-gap midle">
                <div class="button_lm flex center">EN</div>
                <div class="button_lm flex center" id="ln_selected">ID</div>
            </div>
        </nav>
        `;
    }
}
window.customElements.define('main-nav', mainNav);