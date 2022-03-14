import Page from "./Page";

const emailField = '#email_login';
const passwordField = '#password_login';
const loginButton = '#btn_login';
const accountMenu = '#style_avatar_wrapper__pEGIQ';
const disconnexion = '#style_showDropdown__PBBOV > :nth-child(4)';
const firstProduct1 = ':nth-child(2) > .style_card_body__QuFGN > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"] > .style_card_body_img__mkV1D';
const addCard = '#style_btn_add_cart__gTXM7';
const closeProdSheet = '#style_btn_close__9uLzQ > svg'
const quantityfield = '.style_input_quantity__xZDIb';
const shoppingCardIcon = '#style_content_cart_wrapper__mqNbf'
const decrementbtn = '.style_quantity_dec__nm5ig > svg';


class HomePage extends Page {

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

    static clickOnDisconnectbtn(){
        cy.get(accountMenu).trigger('mouseover');
        this.clickOn(disconnexion);
    }

    static clickOnProduct(){
        this.clickOn(firstProduct1)
    }

    static clickOnAddCard(){
        this.clickOn(addCard)
    }

    static clickOnCloseProdSheet(){
        this.clickOn(closeProdSheet)
    }

    static fillQuantity(quantity){
        this.fillField(quantityfield, quantity)
    }

    static clickOnshoppingCardicon(){
        this.clickOn(shoppingCardIcon)
    }

    static clickOndecrementbtn(){
        this.clickOn(decrementbtn)
    }
    
}

export default HomePage