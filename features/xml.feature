Feature: Should be able to use basic sbol document features
  I can use basic sbol API

  Scenario: I can serialaize XML
    Given sbol document
    When I call serializeXML
    Then I get serialized XML ""true"" as a result
