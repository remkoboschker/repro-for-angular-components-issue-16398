import { getGreeting } from '../support/app.po';

describe('nx-repro', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to nx-repro!');
  });
});
