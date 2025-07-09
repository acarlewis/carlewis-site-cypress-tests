Feature: Carlewis Portfolio Navigation through About Section

    Scenario: User Check About Section
        Given User visit main site
        When User click on the "About" link
        Then User should see the "Hello, I Am Carlewis" title in the "About" section
            And User should see "Author" image in the "About" section