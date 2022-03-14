import {And, Given, Then, When} from "cypress-cucumber-preprocessor/steps"
import AuthPage from '../Pages/AuthPage';

//TC_808
//Verify successful login with credentials 

    Given ('go to the login Ztrain page', () => {
        AuthPage.visit()
    });

    When('I fill in the {string} and {string}', (email, password) => {
        AuthPage.fillEmail(email);
        AuthPage.fillPassword(password);
    })

    And ('I click on login button', () =>{
        AuthPage.clickOnLoginBtn()
    });

    Then('I should be redirected to the home page',() =>{
        cy.contains('Popular')
         .should('be.visible')
    });

//TC_807
//Login and password field requiered

    When ('I click on connexion button without filling in the login and password fields', () =>{
        AuthPage.clickOnLoginBtn()
    });   

    Then('User should see and error message below the login and password fields', ()=> {
        cy.contains('incorrect')
        .should('be.visible')
    });    

//TC_806
//Password displayed text when logging in

    When('I fill in the {string} field', (password) => {
        AuthPage.fillPassword(password)
    });

    And('I click on the display password button', () =>{
        AuthPage.clickOnDisplayPasswd()
    }); 
    
    Then('The password is displayed in clear', () =>{
        cy.get("#password_login")
        .invoke('attr', 'type')
        .should('eq', 'text')
    });    

//TC_800
//Successful registration

    When('I click on subscription link', () =>{
        clickOnContain('inscrire')
    });

    Then('I am directed to the registration page', () =>{
        cy.contains('Inscription')
         .should('be.visible')
    });

//TC_810
//Verify password reset

    When('I click on forgot password', () => {
        AuthPage.clickOnForgotPasswd()
    });
    
    And('I fill in the {string} and {string} fields', (email, newPasswd) => {
        AuthPage.fillEmailReset(email);
        AuthPage.fillPasswdReset(newPasswd);
    }); 
    
    And('I click on reset button', () => {
        AuthPage.clickOnResetBtn()
    });

    Then('A password reset confirmation message appears on the screen', () =>{
        cy.contains('réinitialisé')
         .should('be.visible')
    });     