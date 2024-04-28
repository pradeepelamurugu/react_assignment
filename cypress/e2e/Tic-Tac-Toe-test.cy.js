describe('Checking the boxes', () => {
  it('should display 9 boxes', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="checkbox-1"]');
    cy.get('[data-testid="checkbox-2"]');
    cy.get('[data-testid="checkbox-3"]');
    cy.get('[data-testid="checkbox-4"]');
    cy.get('[data-testid="checkbox-5"]');
    cy.get('[data-testid="checkbox-6"]');
    cy.get('[data-testid="checkbox-7"]');
    cy.get('[data-testid="checkbox-8"]');
    cy.get('[data-testid="checkbox-9"]');
  });
});

describe('Clicking the boxes', () => {
  it('should click 1st box', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="checkbox-1"]').click();
    cy.contains('X').click();
  });
});

describe('Clicking the boxes', () => {
  it('should check double click', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="checkbox-1"]').click();
    cy.contains('X').click();
    cy.get('[data-testid="checkbox-1"]').click();
    cy.contains('X').click();
  });
});

describe('Clicking the boxes', () => {
  it('should click 2nd box', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="checkbox-1"]').click();
    cy.get('[data-testid="checkbox-2"]').click();
    cy.contains('O').click();
  });
});

describe('Checking the moves', () => {
  it('should click 3 boxes straight', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="status"]').contains('Next player: X');
    cy.get('[data-testid="checkbox-1"]').click();
    cy.get('[data-testid="status"]').contains('Next player: O');
    cy.get('[data-testid="checkbox-2"]').click();
    cy.get('[data-testid="status"]').contains('Next player: X');
    cy.get('[data-testid="checkbox-3"]').click();
    cy.contains('O').click();
  });
});

describe('Checking for winner', () => {
  it('should check for X', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="checkbox-1"]').click();
    cy.get('[data-testid="checkbox-2"]').click();
    cy.get('[data-testid="checkbox-4"]').click();
    cy.get('[data-testid="checkbox-5"]').click();
    cy.get('[data-testid="checkbox-7"]').click();
    cy.get('[data-testid="status"]').contains('Winner: X');
  });
});

describe('Checking for winner', () => {
  it('should check for O', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="checkbox-1"]').click();
    cy.get('[data-testid="checkbox-2"]').click();
    cy.get('[data-testid="checkbox-4"]').click();
    cy.get('[data-testid="checkbox-5"]').click();
    cy.get('[data-testid="checkbox-9"]').click();
    cy.get('[data-testid="checkbox-8"]').click();
    cy.get('[data-testid="status"]').contains('Winner: O');
  });
});

describe('Checking for draw', () => {
  it('should click for draw', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="checkbox-1"]').click();
    cy.get('[data-testid="checkbox-2"]').click();
    cy.get('[data-testid="checkbox-4"]').click();
    cy.get('[data-testid="checkbox-5"]').click();
    cy.get('[data-testid="checkbox-3"]').click();
    cy.get('[data-testid="checkbox-6"]').click();
    cy.get('[data-testid="checkbox-8"]').click();
    cy.get('[data-testid="checkbox-7"]').click();
    cy.get('[data-testid="checkbox-9"]').click();
    cy.get('[data-testid="status"]').contains('Next player: O');
  });
});
