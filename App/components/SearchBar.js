export default class SearchBar {
    constructor(onSearch) {
        this.onSearch = onSearch;
        this.container = document.createElement('div');
        this.container.classList.add('search-bar');
    }

    render() {
        const root = document.getElementById('root');
        this.container.innerHTML = `
            <input id="searchInput" type="text" placeholder="Buscar libros">
            <button id="searchButton">Buscar</button>
        `;
        root.appendChild(this.container);

        const searchButton = document.getElementById('searchButton');
        searchButton.addEventListener('click', () => {
            const inputValue = document.getElementById('searchInput').value;
            this.handleSearch(inputValue);
        });
    }

    handleSearch(query) {
        this.onSearch(query);
    }
}


