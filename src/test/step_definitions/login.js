//const { Given } = require("cypress-cucumber-preprocessor/steps")
import {And, Given, Then, When} from "cypress-cucumber-preprocessor/steps"

// const emailField = '#email_login';
// const passwordField = '#password_login';
// const passwordShow = 'svg';
// const loginButton = '#btn_login';
// const subscription = '#btn_register';
// const resetPassword = '.style_forgotpass__PRHm_';
const url = 'https://ztrain-web.vercel.app/';


    Given ('go to the login Ztrain page', () => {
        cy.visit(url)
    });
        