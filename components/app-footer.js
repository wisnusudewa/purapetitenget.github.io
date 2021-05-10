class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer mt-auto py-3 bg-dark">
                <div class="container">
                <span class="text-muted">Wisnu_Sudewa90@copyright 2021</span>
                </div>
            </footer>
        `;
    }
}

customElements.define('app-footer', AppFooter);