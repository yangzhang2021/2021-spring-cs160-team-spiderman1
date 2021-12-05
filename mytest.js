/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/signup')
  })

  it('load sign up page', ()=>{
    cy.visit('http://localhost:3000/signup')
  })

  it('register with invalid data', () =>{
    cy.get('input[id=fname]').type('a');
    cy.get('input[id=lname]').type('a');
    cy.get('input[id=email]').type('abc@mail.c');
    cy.get('input[id=password').type('aaaaa123');
    cy.get('input[id=check').type('1111aaaa');
    cy.get('button')
      .contains('Create account')
      .click()
      .url().should('include', 'http://localhost:3000/signup');
    cy.get('.err').should('have.length', 3);
  })

  it('register with all empty field', () =>{
    cy.get('button')
      .contains('Create account')
      .click()
      .url().should('include', 'http://localhost:3000/signup');
    cy.get('[required]');
  })

  it('register with correct data', () =>{
    cy.get('input[id=fname]').type('amy');
    cy.get('input[id=lname]').type('liu');
    cy.get('input[id=email]').type('amy@mail.com');
    cy.get('input[id=password').type('aA12345!');
    cy.get('input[id=check').type('aA12345!');
    cy.get('button')
      .contains('Create account')
      .click()
      .url().should('include', 'http://localhost:3000/signup');
  })
})
