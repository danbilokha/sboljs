const {createDoc, serializeXML} = require('../../src/examples/getting-started')
const assert = require('assert');
const {Given, When, Then} = require('cucumber');

const FIRST_XML_FILE_LINE = '<?xml version="1.0" encoding="UTF-8"?>';
const XML = 'xml';

Given('sbol document', function () {
    // Write code here that turns the phrase above into concrete actions
    this.sboldoc = createDoc();
});

When('I call serializeXML', function () {
    // Write code here that turns the phrase above into concrete actions
    this.result = serializeXML(this.sboldoc);
});

Then('I get serialized XML "{string}" as a result', function (res) {
    // Write code here that turns the phrase above into concrete actions
    const result = this.result.toString();
    const idx = result.indexOf(XML);
    const resultFileExtension = result.slice(idx, idx + XML.length);
    assert.equal(
        (resultFileExtension === XML).toString(),
        res
    )
});
