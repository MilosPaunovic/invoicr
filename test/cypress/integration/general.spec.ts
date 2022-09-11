// Use `cy.dataCy` custom command for more robust tests
// See https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements

describe('Landing', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('.should() - assert that <title> is correct', () => {
    cy.title().should('include', 'Invoicr');
  });
});

// Workaround for Cypress AE + TS + Vite
// See: https://github.com/quasarframework/quasar-testing/issues/262#issuecomment-1154127497
export { };
