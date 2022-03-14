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
        cy.contains('Email ou mot de passe incorrect')
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

//TC_799
//Access to the registration page

    When('I click on registration link', () =>{
        AuthPage.clickOnSybsLink()
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

//TC_811
//Failed registration due to email

    When('I fill in {string} and {string}', (email, password) =>{
        AuthPage.fillEmailSubsField(email);
        AuthPage.fillPasswdSubsField(password)
    });

    And('I click on the subscription button', () =>{
        AuthPage.clickOnSubsBtn()
    });

    Then('An error message is displayed', () =>{
        cy.contains('email must be an email')
         .should('be.visible')
    });

//TC_805
//Failed registration due to email

    Then('An error message should displayed', () =>{
        cy.contains('password must be longer than or equal to 8 characters')
        .should('be.visible')
    });

//TC_804
//Failed registration due to required fields

    Then('An error message displayed', () =>{
        cy.contains('password should not be empty')
        .should('be.visible')
    });

//TC_800
//Successful registration   

    Then('The homepage is displayed', () =>{
        cy.contains('ZTrain')
        .should('be.visible')
    });    

//TC_812
//Age field validation
    When('I fill in {string} and {string} and {string}', (email, password, age) =>{
        AuthPage.fillEmailSubsField(email);
        AuthPage.fillPasswdSubsField(password);
        AuthPage.fillAgeField(age);
    })

    Then('An internal error server message displayed', () =>{
        cy.contains('Internal server error')
        .should('be.visible')
    });