Feature: Tosca vehicle insurance Testing
    I should be able to go to Sample app website 
    and visit automobile page and there I should be able to 
    enter data such as 
    Vehicle data
    insurant data
    product data
    price option
    and then send the qoute
    and check the whether it is successfully

    Scenario: Visit the sample application website and select automobile page
        Given I visit tosca sample app website
        When I click on automobile tab
        Then I should see Enter Vehicle Data page

    Scenario:Enter Vehicle data and click next
        When I enter details and click next
        Then I should see Insurant Data page

    Scenario:Enter Insurant data and click next
        When I enter insurant data and click next
        Then I should see Product Data page
    
    Scenario:Enter Product data and Click next
		When I enter product data and click next
		Then I should see price options
    
    Scenario:Select Pricing Option and click next
        When I select pricing option and click next
        Then I should see

    Scenario:Enter Send quote data and click send
        When I enter send quote data and click send
        Then I should see a message