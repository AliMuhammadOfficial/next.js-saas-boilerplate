/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress
describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('/');

    // The index page should contain an h1
    cy.findByRole('heading', {
      name: 'A modern SaaS Boilerplate built with Next.js 13',
    });

    // Find a link containing "About" text and click it
    cy.findByRole('link', { name: 'About' }).click();

    // The new url should include "/about"
    cy.url().should('include', '/about');
  });
});
