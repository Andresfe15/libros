import SearchBar from './components/SearchBar.js';
import BookDetails from './components/BookDetails.js';

export default class App {
    constructor() {
        this.searchBar = new SearchBar(this.searchBooks.bind(this));
        this.bookDetails = new BookDetails();
    }

    async searchBooks(query) {
        try {
            if (!query) {
                alert('Por favor, ingresa un término de búsqueda válido.');
                return;
            }

            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
            const data = await response.json();
            if (data && data.items && data.items.length > 0) {
                const book = data.items[0].volumeInfo; 
                this.bookDetails.render(book);
            } else {
                alert('No se encontraron libros que coincidan con tu búsqueda.');
            }
        } catch (error) {
            console.error('Error al buscar libros:', error);
            alert('Ocurrió un error al buscar libros. Por favor, intenta de nuevo más tarde.');
        }
    }

    init() {
        this.renderTitle();
        this.searchBar.render();
    }

    renderTitle() {
        const root = document.getElementById('root');
        const title = document.createElement('h1');
        title.textContent = 'Consulta sobre los libros de tu interés:';
        root.appendChild(title);
    }
}

