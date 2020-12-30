
describe('Post', () => {
    beforeEach(() => {
        cy.login('testecypress@testecypress.com', 'testecypress')
    
    })
    it('Novo', () => {
        cy.contains('New Article').click()
        cy.location('pathname').should('equal', '/editor')
        cy.get('[formcontrolname=title]').type('Cypress E2E')
        cy.get('[formcontrolname=description]').type('Ponta a Ponta')
        cy.get('[formcontrolname=body').type('Agilidade, Qualidade')
        cy.contains('Publiah Article').click()
        cy.get('h1').contains('Cypress E2E')
    })


})