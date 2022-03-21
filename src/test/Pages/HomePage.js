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
const decrementBtn = '.style_quantity_dec__nm5ig';
const incrementBtn = '.style_quantity_in__XmF4D';
const trashCardBtn = '#style_btn_trash_cart__ttfo9';
const trashProdCard = '.style_trash_product_cart__7Yzni > svg';
const closeContentCard = '#style_content_cart_header__NIJbw > div > svg';
const inputQtyCard = '.style_quantity__qJbQ3';
const priceFirstProd = '.style_card_body__EhpLW > :nth-child(2)';
const card_wrapper = '#style_card_wrapper__hrc1I'



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
        cy.get('.style_card__JLMp6').each((element) => {
            cy.get(inputQtyCard)
            .invoke('val')
            .then((value) => {
                cy.log(value)
            })
            
        })
        
    }

    static clickOndecrementbtn(){
        cy.get(inputQtyCard)
            .invoke('val')
            .then((value) => {
                const initialPrice = value
                cy.wrap(initialPrice).as('initialPrice')
            })
        this.clickOn(decrementBtn)
    }

    static clickOnIncrementbtn(){
        cy.get(inputQtyCard)
            .invoke('val')
            .then((value) => {
                const initialPrice = value
                cy.wrap(initialPrice).as('initialPrice')
            })
        this.clickOn(incrementBtn)
    }

    static clickOnTrashCardbtn(){
        this.clickOn(trashCardBtn)
    }

    static clickOnTrashProdCard(){
        this.clickOn(trashProdCard)
    }

    static clickOnCloseContentCard(){
        this.clickOn(closeContentCard)
    }
    
}

export default HomePage