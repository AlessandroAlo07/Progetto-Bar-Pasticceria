// Definisci la struttura del menu
const headerHTML = `
    <header>
        <h1>Bar Pasticceria</h1>
        <nav>
            <ul class="menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="dolci.html">Dolci</a></li>
                <li><a href="bevande.html">Bevande</a></li>
                <li><a href="rosticceria.html">Rosticceria</a></li>
            </ul>
        </nav>
    </header>
`;

// Inserisce il menu all'inizio del body della pagina
document.addEventListener("DOMContentLoaded", function() {
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});
