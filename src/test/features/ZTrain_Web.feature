Feature: Connexion
        Background:
            Given User is on connexion page

        @TEST_OF-806
        Scenario: Password displayed text when logging in
             When  User fills in the password field
              And User clicks on the display password button to the right of the password field
             Then The password is displayed in clear

        @TEST_OF-807
        Scenario: Login and password field requiered
             When User clicks on connexion button without filling in the login and password fields
             Then User should see and error message below the login and password fields

        @TEST_OF-808
        Scenario: Verify successful login with credentials
             When User fills in the email field
              And User fills in password field
              And User clicks on login button
             Then User should be redirected to the home page

        @TEST_OF-810
        Scenario: Verify password reset
             When User clicks on forgot password
              And User fills in the reset email field
              And User fills in the new password field
              And User clicks on reset button
             Then A password reset confirmation message appears on the screen

        @TEST_OF-811
        Scenario: Failed registration due to email
             When I click on subscription link
              And I fill in email field with a wrong email
              And I fill in password field with password
              And I click on the button Inscription
             Then An error message is displayed

        @TEST_OF-812
        Scenario: Age field validation
             When I click on registration link
              And I fill in the email field
              And I fill in the password field
              And I fill in the age field with a suite of non-numeric character
              And I click on inscription button
             Then  An error message should displayed

        @TEST_OF-800
        Scenario: Successful registration
             When I click on subscription link
              And I fill in email field
              And I fill in password field
              And I click on the inscription button
             Then The homepage is displayed

        @TEST_OF-799
        Scenario: Access to the registration page
             When I click on the registration link
             Then I am directed to the registration page

        @TEST_OF-840
        Scenario: Log out of account
             When User fills in email field
              And User fills in password field
              And User clicks on login button
              And User clicks on Account icon
              And User clicks on disconnect
             Then User should be logged out

        @TEST_OF-805
        Scenario: Failed registration due to password
             When I click on subscription link
              And I fill in email field with email
              And I fill in password field with a wrong password
              And I click on the button Inscription
             Then An error message is displayed

        @TEST_OF-804
        Scenario: Failed registration due to required fields
             When I click on subscription link
              And I click on the button Inscription
             Then An error message displayed
             