const {createEmptyDoc, loadRdf} = require('../../src/examples/getting-started')
const assert = require('assert');
const {Given, When, Then} = require('cucumber');


Given('sbol document 1', function () {
    // Write code here that turns the phrase above into concrete actions
    this.sboldoc = createEmptyDoc();
    console.log(this.sboldoc)
});

When('I load rdf file with path "{string}"', function (path) {
    // Write code here that turns the phrase above into concrete actions
    this.file = loadRdf(this.sboldoc, path, (v) => console.log('loaded', v));
});

Then('I get RDF file loaded', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log(this.file)
});
