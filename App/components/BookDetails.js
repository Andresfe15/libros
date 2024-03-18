export default class BookDetails {
    constructor() {
        this.container = document.createElement('div');
        this.container.classList.add('book-details');
    }

    render(book) {
        const root = document.getElementById('root');
        this.container.innerHTML = `
            <h2>${book.title}</h2>
            <p>Autor: ${book.authors ? book.authors.join(', ') : 'Desconocido'}</p>
            <p>Categoría: ${book.categories ? book.categories.join(', ') : 'Desconocida'}</p>
            ${book.imageLinks ? `<img src="${book.imageLinks.thumbnail}" alt="${book.title}">` : ''}
            <p>${book.description ? book.description : 'Sin descripción disponible'}</p>
        `;
        root.appendChild(this.container);
    }
}


