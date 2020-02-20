Feature: Should create document
  I call fn and it creates doc

  Scenario: I create doc
    Given I do not have instance of the doc
    When I create it
    Then I receive ""object"" as a result

