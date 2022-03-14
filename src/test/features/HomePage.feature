Feature: User connected

        Background:
            Given go to the login Ztrain page
             When I fill in email and password fields
                  | email             | password |
                  | 237pk69@gmail.com | P@wk*/69 |
              And I click on login button

        @TEST_OF-840
        Scenario: Log out of account
             When I point the cursor to the account icon and click on disconnexion
             Then I should be logged out

        @TEST_OF-830
        Scenario: Display the sheet of a product
             When I click on a product
             Then The product sheet should appear

        @TEST_OF-831
        Scenario: Test Add product to cart
             When I click on a product
              And I fill in the quantity of product
                  | quantity |
                  | 0        |
              And I click on add to card
             Then We observe a pop pop which indicates the confirmation message
              And I click on the cross to close the product sheet

        @TEST_OF-832
        Scenario: Decrement test of the quantity of a product
             When I click on a product
              And I fill in the quantity of product
                  | quantity |
                  | 0        |
              And I click on add to card
              And I click on the cross to close the product sheet
              And I click on the shopping cart icon at the top right
              And I click on decrement button
              
        