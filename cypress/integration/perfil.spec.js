
describe('Profile', () => {
    
    it('Editar Perfil', () => {
        cy.login('testecypress@testecypress.com', 'testecypress')
        cy.constains( 'testecypress').click()
        cy.constains( 'Edit Profile Settings').click()
        cy.get('[formcontrolname="image"]').clear()
        cy.get('[formcontrolname="image"]')
        .type('https://thispersondoesnotexist.com/image')
        cy.get('[formcontrolname=password]').type('testecypress')
        cy.constains('Update Settings').click()
    })

   
})