#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: New Contact

  Scenario Outline: free CRM app with parameters POM test
    Given user logged in and is on home page
    Then user hover over contacts link and clicks on New Contact link
    Then user enters "<title>", "<fname>" , "<lname>" and "<comp>"
    Then verify new contact "<fname>" and "<lname>" created
    Then delete new contact "<fname>" and "<lname>"
    Then tear down

    Examples: 
      | title | fname | lname | comp |
      | Mrs.  | ee1   | ff2   | gg3  |
      | Dr.   | ee4   | ff5   | gg6  |
