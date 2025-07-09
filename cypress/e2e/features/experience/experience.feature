Feature: Carlewis Portfolio Navigation through Experience Section

    Scenario: User Check Experience Section
        Given User visit main site
        When User click on the "experiance" link
        Then User should see the "My Experiance" title in the "Experiance" section
            And User should see the "1" experience
