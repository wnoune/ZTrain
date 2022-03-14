import Page from "./Page";

const emailField = '#email_login';
const passwordField = '#password_login';
const passwordShow = 'svg';
const loginButton = '#btn_login';
const subscription = '#btn_register';
const forgotPassword = '.style_forgotpass__PRHm_';
const url = 'https://ztrain-web.vercel.app/';
const errorFieldRequier= '.style_messageError__LxTAG';
const errorMessageRequier= 'Email ou mot de passe incorrect';
const displayPasswd = 'svg';
const emailResetField = '#email_reset_pass';
const passwdResetField = '#reset_password';
const resetButton = '#btn_reset_password';

class LoginPage extends Page {

    static visit(){
        cy.visit('/');
    }

    static fillEmail(email){
        this.fillField(emailField, email)
    }

    static fillPassword(password){
        this.fillField(passwordField, password)
    }

    static clickOnLoginBtn(){
        this.clickOn(loginButton)
    }

    static clickOnDisplayPasswd(){
        this.clickOn(displayPasswd)
    }    

    static clickOnForgotPasswd(){
        this.clickOn(forgotPassword)
    } 

    static fillEmailReset(email){
        this.fillField(emailResetField, email)
    }

    static fillPasswdReset(newPasswd){
        this.fillField(passwdResetField, newPasswd)
    }
    
    static clickOnResetBtn(){
        this.clickOn(resetButton)
    } 

}

export default LoginPage
