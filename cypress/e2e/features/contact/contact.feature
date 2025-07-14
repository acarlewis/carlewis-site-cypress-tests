Feature: Carlewis Portfolio Navigation through Contact Section

    Scenario: User Check Contact Section
        Given User visit main site
        When User click on the "contact" link
        Then User should see the "Contact Me" title in the "contact" section


    Scenario: User Submit Contact Details with Valid Data
        Given User visit main site
        When User click on the "contact" link
        Then User should see the "Contact Me" title in the "contact" section
        When User fill in the contact form with valid data
                | field          | value                |
                | Name           | Carlewis Akana       |
                | Phone          | 0543648861           |
                | Email          | afreecarl@gmail.com  |
                | Message        | This is a test message |
        Then User should be able to submit the form successfully
            # And User should see a success message indicating the form was submitted
            # And User should receive a confirmation email (if applicable)


    Scenario: User Submit Contact Details with Invalid Data
        Given User visit main site
        When User click on the "contact" link
        Then User should see the "Contact Me" title in the "contact" section
        When User fill in the contact form with invalid data
                | field          | value                |
                | Name           | John Doe             |
                | Phone          | 8785                 |
                | Email          | john@example.com     |
                | Message        | This is a test message |
        Then User should see an error message indicating invalid input
            # And User should not be able to submit the form