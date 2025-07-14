Feature: Carlewis Portfolio Navigation through Portfolio Section


    Scenario: User Check Portfolio Section
        Given User visit main site
        When User click on the "portfolio" link
        Then User should see the "Recent Work" title in the "Portfolio" section
            And User get the name of the first project
        When User should click on the project link
        Then User should see the project details page
            And User should compare the project name with the first project name


    Scenario: User Check Portfolio Through the "VIEW ALL PORTFOLIOS" link
        Given User visit main site
        When User click on the "portfolio" link
        Then User should see the "Recent Work" title in the "Portfolio" section
        When User should click on "VIEW ALL PORTFOLIOS"
        Then User should see the "Portfolio" section
        # When User click on the first project link
        # Then User should see the project details page
        #     And User should see the project name in the header