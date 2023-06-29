describe('full end to end test of user journey', () => {
  it('visits the apps url', () => {
    cy.visit('http://localhost:3001')
  })
  it('selects the input field', () => {
    cy.get('input').type('react')
  })
  it('selects the input field', () => {
    cy.get('button').click()
  })
  it('render the h1 element and text should show react', () => {
    cy.wait(100)
    cy.get('.subject-name').should('include.text', 'React')
  })
  it('selects the react beta docs and gets the link', () => {
    cy.get('[href="https://beta.reactjs.org/"]').click()
  })
})