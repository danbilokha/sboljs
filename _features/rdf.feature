Feature: Should be able to work with RDF files

  Scenario: I can load RDF file
    Given sbol document 1
    When I load rdf file with path ""src/data/RepressionModel.rdf""
    Then I get RDF file loaded
