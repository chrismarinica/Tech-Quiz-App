// cypress/component/Quiz.cy.tsx

//import React from 'react';
import Quiz from '../../client/src/components/Quiz';

describe('<Quiz />', () => {
  beforeEach(() => {
    // Mock the API call for getting questions
    cy.intercept('GET', '/api/questions', { fixture: 'questions.json' }).as('getQuestions');
  });

  it('renders the Start Quiz button', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').should('be.visible'); // Ensure the start quiz button is visible
  });

  it('starts the quiz and shows the first question when the start button is clicked', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').click(); // Click start quiz button
    cy.wait('@getQuestions'); // Wait for the mock API call to finish
    cy.contains('What is 2 + 2?').should('be.visible'); // Assuming this is the first question in your mock data
  });

  it('shows the correct answer options and updates score on correct answer', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').click(); // Click start quiz button
    cy.wait('@getQuestions');
    cy.contains('1').click(); // Assume "1" is the correct answer
    cy.contains('Your score: 1/1').should('be.visible'); // Check score after answering
  });

  it('navigates to the next question after answering', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.contains('1').click(); // Answer first question
    cy.contains('What is 3 + 3?').should('be.visible'); // Check if next question appears
  });

  it('ends the quiz and shows the final score after all questions are answered', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.contains('1').click(); // Answer first question
    cy.contains('2').click(); // Answer second question
    cy.contains('Quiz Completed').should('be.visible'); // Check if quiz completion message appears
    cy.contains('Your score: 2/2').should('be.visible'); // Check if score is displayed correctly
  });

  it('allows restarting the quiz', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.contains('1').click(); // Answer first question
    cy.contains('2').click(); // Answer second question
    cy.contains('Take New Quiz').click(); // Click "Take New Quiz"
    cy.contains('Start Quiz').should('be.visible'); // Ensure "Start Quiz" button reappears
  });
});