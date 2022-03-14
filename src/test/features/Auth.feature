Feature: User connected

        Background:
            Given go to the login Ztrain page

        @TEST_OF-808
        Scenario Outline: Verify successful login with credentials
             When I fill in the '<email>' and '<password>'
              And I click on login button
             Then I should be redirected to the home page

        Examples:
                  | email             | password |
                  | 237pk69@gmail.com | P@wk*/69 |


        @TEST_OF-807
        Scenario: Login and password field requiered
             When I click on connexion button without filling in the login and password fields
             Then User should see and error message below the login and password fields

        @TEST_OF-806
        Scenario Outline: Password displayed text when logging in
             When I fill in the '<password>' field
              And I click on the display password button
             Then The password is displayed in clear

        Examples:
                  | password |
                  | P@wk*/69 |

        @TEST_OF-799
        Scenario: Access to the registration page
             When I click on the registration link
             Then I am directed to the registration page

        @TEST_OF-810
        Scenario Outline: Verify password reset
             When I click on forgot password
              And I fill in the '<email>' and '<newPasswd>' fields
              And I click on reset button
             Then A password reset confirmation message appears on the screen

        Examples:
                  | email             | newPasswd |
                  | 237pk69@gmail.com | P@wk*/69  |
