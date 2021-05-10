class AppMenu extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                <div class="container-fluid d-inline-flex">
                <a class="navbar-brand d-flex" href="#" style="gap: 8px;">
                    <img src="../images/logo/stikom.png" alt="" width="30" height="30">
                    <img src="../images/logo/badung.png" alt="" width="30" height="30">
                    <span class="d-flex" style="flex-direction: column;">
                        <span style="font-size: 12px;">PURA PETITENGET</span>
                        <span style="font-size: 8px;">Br. Batu Belig, Desa Kerobokan, Kuta Utara, Badung</span>
                    </span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a id="menuBeranda" class="nav-link" href="http://127.0.0.1:5500/index.html">Beranda</a>
                    </li>
                    <li class="nav-item">
                        <a id="menuVirtualTour" class="nav-link" href="http://127.0.0.1:5500/pages/virtual360/index.htm">Virtual Tour</a>
                    </li>
                    <li class="nav-item">
                        <a id="menuTentang" class="nav-link" href="http://127.0.0.1:5500/tentang.html">Tentang</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('app-menu', AppMenu);

// note
// sesuaikan url menu setiap menjalankan aplikasi khususnya http://127.0.0.1:5500