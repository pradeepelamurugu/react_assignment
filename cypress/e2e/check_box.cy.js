describe('Checking the boxes', () => {
    it('Display 9 boxes in 3 rows', () => {
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