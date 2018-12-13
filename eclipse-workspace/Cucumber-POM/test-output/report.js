$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("freeCRM-ScOutline.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 19,
  "name": "New Contact",
  "description": "",
  "id": "new-contact",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "free CRM app with parameters POM test",
  "description": "",
  "id": "new-contact;free-crm-app-with-parameters-pom-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "user logged in and is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user hover over contacts link and clicks on New Contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user enters \"\u003ctitle\u003e\", \"\u003cfname\u003e\" , \"\u003clname\u003e\" and \"\u003ccomp\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "verify new contact \"\u003cfname\u003e\" and \"\u003clname\u003e\" created",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "tear down",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "new-contact;free-crm-app-with-parameters-pom-test;",
  "rows": [
    {
      "cells": [
        "title",
        "fname",
        "lname",
        "comp"
      ],
      "line": 29,
      "id": "new-contact;free-crm-app-with-parameters-pom-test;;1"
    },
    {
      "cells": [
        "Mrs.",
        "ee1",
        "ff2",
        "gg3"
      ],
      "line": 30,
      "id": "new-contact;free-crm-app-with-parameters-pom-test;;2"
    },
    {
      "cells": [
        "Dr.",
        "ee4",
        "ff5",
        "gg6"
      ],
      "line": 31,
      "id": "new-contact;free-crm-app-with-parameters-pom-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "free CRM app with parameters POM test",
  "description": "",
  "id": "new-contact;free-crm-app-with-parameters-pom-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "user logged in and is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user hover over contacts link and clicks on New Contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user enters \"Mrs.\", \"ee1\" , \"ff2\" and \"gg3\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "verify new contact \"ee1\" and \"ff2\" created",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "tear down",
  "keyword": "Then "
});
formatter.match({
  "location": "NewContact_POMStepDefinition.user_logged_in_and_is_on_home_page()"
});
formatter.result({
  "duration": 19227560047,
  "status": "passed"
});
formatter.match({
  "location": "NewContact_POMStepDefinition.user_hover_over_contacts_link_and_clicks_on_New_Contact_link()"
});
formatter.result({
  "duration": 2352560981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs.",
      "offset": 13
    },
    {
      "val": "ee1",
      "offset": 21
    },
    {
      "val": "ff2",
      "offset": 29
    },
    {
      "val": "gg3",
      "offset": 39
    }
  ],
  "location": "NewContact_POMStepDefinition.user_enters_and_Names(String,String,String,String)"
});
formatter.result({
  "duration": 2514119494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ee1",
      "offset": 20
    },
    {
      "val": "ff2",
      "offset": 30
    }
  ],
  "location": "NewContact_POMStepDefinition.verify_new_contact_and_created(String,String)"
});
formatter.result({
  "duration": 1112348575,
  "status": "passed"
});
formatter.match({
  "location": "NewContact_POMStepDefinition.tear_down()"
});
formatter.result({
  "duration": 664597748,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "free CRM app with parameters POM test",
  "description": "",
  "id": "new-contact;free-crm-app-with-parameters-pom-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "user logged in and is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user hover over contacts link and clicks on New Contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user enters \"Dr.\", \"ee4\" , \"ff5\" and \"gg6\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "verify new contact \"ee4\" and \"ff5\" created",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "tear down",
  "keyword": "Then "
});
formatter.match({
  "location": "NewContact_POMStepDefinition.user_logged_in_and_is_on_home_page()"
});
formatter.result({
  "duration": 17333422901,
  "status": "passed"
});
formatter.match({
  "location": "NewContact_POMStepDefinition.user_hover_over_contacts_link_and_clicks_on_New_Contact_link()"
});
formatter.result({
  "duration": 2792281511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dr.",
      "offset": 13
    },
    {
      "val": "ee4",
      "offset": 20
    },
    {
      "val": "ff5",
      "offset": 28
    },
    {
      "val": "gg6",
      "offset": 38
    }
  ],
  "location": "NewContact_POMStepDefinition.user_enters_and_Names(String,String,String,String)"
});
formatter.result({
  "duration": 2155965670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ee4",
      "offset": 20
    },
    {
      "val": "ff5",
      "offset": 30
    }
  ],
  "location": "NewContact_POMStepDefinition.verify_new_contact_and_created(String,String)"
});
formatter.result({
  "duration": 1269279429,
  "status": "passed"
});
formatter.match({
  "location": "NewContact_POMStepDefinition.tear_down()"
});
formatter.result({
  "duration": 670319812,
  "status": "passed"
});
formatter.uri("freeCRM.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "free CRM application POM test",
  "description": "",
  "id": "free-crm-application-pom-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 23,
  "name": "validate Free CRM Home Page Test",
  "description": "",
  "id": "free-crm-application-pom-test;validate-free-crm-home-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user is on Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user logs into app",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "validate logged user name",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "browser down",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_opens_browser()"
});
formatter.result({
  "duration": 10166074214,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 11279454,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_logs_into_app()"
});
formatter.result({
  "duration": 10903073848,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_home_page_title()"
});
formatter.result({
  "duration": 20000167,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_logged_user_name()"
});
formatter.result({
  "duration": 151070706,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.browser_down()"
});
formatter.result({
  "duration": 644722602,
  "status": "passed"
});
});