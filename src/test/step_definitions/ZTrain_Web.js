import {And, Given, Then, When} from "cypress-cucumber-preprocessor/steps"

let homePage= 'https://ztrain-web.vercel.app/auth/login';
let erroField = '.style_forgotpass__PRHm_';
let errorMessage= 'Mot de passe oublié?';
let emailField= '#email_login';
let email= '237pk69@gmail.com'
let passwordField= '#password_login';
let password= 'P@wk*/69';
let passwordShow= 'svg';
let loginButton= '#btn_login';
let resetPassword= '.style_forgotpass__PRHm_';
let emailResetField= '#email_reset_pass';
let passwordResetField= '#reset_password';
let newPassword= 'P@wk*/69';
let resetButton= '#btn_reset_password';
let emailSubsField= '#email_register';
let passwordSubsField= '#password_register';
let subscription= '#btn_register';
let wrongEmail= 'ndorichnel@.com';
let wrongPassword= 'Nd@r1ch'
let errorSubsField= '.style_messageError__LxTAG';
let errorSubsMessage= 'email must be an email';
let newEmail= '237pk3@gmail.com';
let ageField= '[placeholder="Age"]';
let age= '20 ans';
let accountMenu= '#style_avatar_wrapper__pEGIQ';
let disconnexion= '#style_showDropdown__PBBOV > :nth-child(4)';
let errorFieldRequier= '.style_messageError__LxTAG';
let errorMessageRequier= 'Email ou mot de passe incorrect';



function clickOnGet(element){
    cy.get(element)
        .click()
}

function clickOnContain(element){
    cy.contains(element)
        .click({force: true})
}

function fillField(field,value){
    cy.get(field)
        .type(value)
}

function showMenu(element){
    cy.get(element)
    .trigger('mouseover')
}

//TC_806
//Password displayed text when logging in
    Given('User is on connexion page', () =>{
       cy.visit(homePage)
    });

    When('User fills in the password field', () =>{
        fillField(passwordField, password)
    });

    And('User clicks on the display password button to the right of the password field', () =>{
        clickOnGet(passwordShow)
    });

    Then('The password is displayed in clear', () =>{
        cy.get(passwordField)
        .should('be.visible', password)
    });

//TC_807
//Login and password field requiered
    When('User clicks on connexion button without filling in the login and password fields', ()=> {
        clickOnGet(loginButton)
    });

    Then('User should see and error message below the login and password fields', ()=> {
        cy.get(errorFieldRequier)
        .should('be.visible', errorMessageRequier)
    });
       
//TC_808
//Verify successful login with credentials 
    When('User fills in the email field', () =>{
        fillField(emailField, email)
    });

    And('User fills in password field', () =>{
        fillField(passwordField, password)
    });

    And('User clicks on login button', () =>{
        clickOnGet(loginButton)
    });

    Then('User should be redirected to the home page', () =>{
        cy.contains('Popular')
         .should('be.visible')
    });

//TC_810
//Verify password reset
    When('User clicks on forgot password', () =>{
        clickOnGet(resetPassword)
    });

    And('User fills in the reset email field', () =>{
        fillField(emailResetField, email)
    });

    And('User fills in the new password field', () =>{
        fillField(passwordResetField, newPassword)
    });

    And('User clicks on reset button', () =>{
        clickOnGet(resetButton)
    });

    Then('A password reset confirmation message appears on the screen', () =>{
        cy.contains('réinitialisé')
         .should('be.visible')
    });

//TC_811
//Failed registration due to email
    When('I click on subscription link', () =>{
        clickOnContain('inscrire')
    });

    And('I fill in email field with a wrong email', () =>{
        cy.url()
         .should('include', '/auth/register')
        fillField(emailSubsField, wrongEmail)
    });

    And('I fill in password field with password', () =>{
        fillField(passwordSubsField, password)
        });

    And('I click on the button Inscription', () =>{
        clickOnGet(subscription)
    });

    Then('An error message is displayed', () =>{
        cy.contains('must')
         .should('be.visible')
    });

     
//TC_812
//Age field validation   
When('I click on registration link', () =>{
        clickOnContain('inscrire')
    });

    And('I fill in the email field', () =>{
        fillField(emailSubsField, newEmail)
    });

    And('I fill in the password field', () =>{
        fillField(passwordSubsField, password)
        });

    And('I fill in the age field with a suite of non-numeric character', () =>{
        fillField(ageField, age)
    });

    And('I click on inscription button', () =>{
        clickOnGet(subscription)
    });

    Then('An error message should displayed', () =>{
        cy.contains('Internal server error')
         .should('be.visible')
    });        

//TC_800
//Successful registration
    When('I click on subscription link', () =>{
        clickOnContain('inscrire')
    });

    And('I fill in email field', () =>{
        fillField(emailSubsField, newEmail)
    });

    And('I fill in password field', () =>{
        fillField(passwordSubsField, password)
    });

    And('I click on the inscription button', () =>{
        clickOnGet(subscription)
    });

    Then('The homepage is displayed', () =>{
        cy.contains('ZTrain')
         .should('be.visible')
    });

//TC_799
//Access to the registration page
    When('I click on the registration link', () =>{
        clickOnContain('inscrire')
    });

    Then('I am directed to the registration page', () =>{
        cy.contains('Inscription')
         .should('be.visible')
    });


//TC_840
//Log out of account
    When('User fills in email field', () =>{
        fillField(emailField, email)
    });

    And('User fills in password field', () =>{
        fillField(passwordField, password)
    });

    And('User clicks on login button', () =>{
        clickOnGet(loginButton)
    });

    When('User clicks on Account icon', () =>{
        showMenu(accountMenu)
    });

    And('User clicks on disconnect', () =>{
       clickOnGet(disconnexion)
    });

    Then('User should be logged out', () =>{
        cy.contains('Connexion')
         .should('be.visible')
    });

//TC_805
//Failed registration due to password
    When('I click on subscription link', () =>{
        clickOnContain('inscrire')
    });

    And('I fill in email field with email', () =>{
        cy.url()
         .should('include', '/auth/register')
        fillField(emailSubsField, email)
    });

    And('I fill in password field with a wrong password', () =>{
        fillField(passwordSubsField, wrongPassword)
    });

    And('I click on the button Inscription', () =>{
        clickOnGet(subscription)
    });

    Then('An error message is displayed', () =>{
        cy.contains('password must be longer than or equal to 8 characters')
         .should('be.visible')
    });

//TC_804
//Failed registration due to required fields
    When('I click on subscription link', () =>{
        clickOnContain('inscrire')
    });

    And('I click on the button Inscription', () =>{
        clickOnGet(subscription)
    });

    Then('An error message is displayed for email and Password', () =>{
        cy.contains('password should not be empty')
         .should('be.visible')
    });