Feature: Feature login

    Feature This feature is required for a user to log in

    Scenario: Login Failure
    Given A user opens the login page
    When A user enter the user email id "seenumirashi1992@gmail.com"
    And A user enter the wrong passward "test1234"
    And A user click on the login button
    Then A user will be logged in