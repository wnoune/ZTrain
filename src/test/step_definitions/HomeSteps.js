import {And, Given, Then, When} from "cypress-cucumber-preprocessor/steps"
import HomePage from '../Pages/HomePage';


//TC_840
//Log out of account
    Given ('go to the login Ztrain page', () => {
        HomePage.visit()
    });

    When('I fill in email and password fields', (data) => {
        data.hashes().forEach((element) => {
            HomePage.fillEmail(element.email);
            HomePage.fillPassword(element.password);
        });        
    })

    And ('I click on login button', () =>{
        HomePage.clickOnLoginBtn()
    });

    And('I point the cursor to the account icon and click on disconnexion', () => {
        HomePage.clickOnDisconnectbtn()
    });

    Then('I should be logged out',() =>{
        cy.contains('Bienvenue!!!')
        .should('be.visible')
    });

//TC_830
//Display the sheet of a product

    When('I click on a product', () => {
        HomePage.clickOnProduct()
    });

    Then('The product sheet should appear', () => {
        cy.contains('Description')
        .should('be.visible')
    });

    //TC_831
    //Test Add product to cart

    When('I fill in the quantity of product', (data) => {
        data.hashes().forEach((element) => {
            HomePage.fillQuantity(element.quantity)
        });       
    })

    And('I click on add to card', () => {
        HomePage.clickOnAddCard()
    });

    Then('We observe a pop pop which indicates the confirmation message', () => {
        cy.contains('Votre panier a ete mis à jour')
        .should('be.visible')
    });    

    And('I click on the cross to close the product sheet', () => {
        HomePage.clickOnCloseProdSheet()
    });

//TC_832
//Decrement test of the quantity of a product

    When('I click on the shopping cart icon at the top right', () => {
        HomePage.clickOnshoppingCardicon()
    });

    When('I click on decrement button', () => {
        HomePage.clickOndecrementbtn()
    });

       


