Feature: Carlewis Portfolio Navigation through Portfolio Section

    Scenario: User Check Portfolio Section
        Given User visit main site
        When User click on the "Portfolio" link
        Then User should see the "Recent Work" section
        When User get the name of the first project
        Then User should click on "VIEW ALL PORTFOLIOS"