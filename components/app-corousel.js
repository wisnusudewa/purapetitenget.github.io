class AppCorousel extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
            <div class="row"> 
                <div id="carouselBeranda" class="carousel slide" data-bs-ride="carousel">
                    <p style="color: rgb(255, 147, 6);position: absolute;z-index: 1;width: 100%;text-align: center;top: calc((80vh/2) - 65px);">Selamat Datang Di Website</p>
                    <h1 style="color: rgb(255, 147, 6);position: absolute;z-index: 1;width: 100%;text-align: center;top: calc((80vh/2) - 44px);">"PURA PETITENGET"</h1>
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselBeranda" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselBeranda" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="./images/corousel/awal (1).jpg" class="d-block w-100" style="height: 80vh; object-fit: cover;" >
                            <div class="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="./images/corousel/awal (2).jpg" class="d-block w-100" style="height: 80vh; object-fit: cover;">
                            <div class="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="./images/corousel/awal (3).jpg" class="d-block w-100" style="height: 80vh; object-fit: cover;">
                            <div class="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselBeranda" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselBeranda" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        `;
    }
}

customElements.define('app-corousel', AppCorousel);
