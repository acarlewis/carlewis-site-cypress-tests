Feature: Carlewis Portfolio Navigation through Services Section

    Scenario: User Check Service Section
        Given User visit main site
        When User click on the "services" link
        Then User should see the "My Services" title in the "Services" section
            And User should see the "1" services