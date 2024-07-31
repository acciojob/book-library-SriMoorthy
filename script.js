//your JS code here. If required.
describe('Book Library', () => {
    it('should have correct styles for book price and author', () => {
        const priceBackground = 'rgb(46, 204, 113)';
        const colorAuthor = 'rgb(119, 119, 119)';
        const colorWhite = 'rgb(255, 255, 255)';

        cy.get('.book').each((book) => {
            cy.wrap(book).within(() => {
                cy.get('.book-price').should('have.css', 'background-color', priceBackground)
                                     .and('have.css', 'color', colorWhite)
                                     .and('have.css', 'border-radius');
                cy.get('.book-author').should('have.css', 'color').and('include', colorAuthor);
            });
        });
    });
});

