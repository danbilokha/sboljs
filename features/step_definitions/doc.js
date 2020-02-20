const {createDoc} = require('../../src/examples/getting-started');
const assert = require('assert');
const {Given, When, Then} = require('cucumber');

Given('I do not have instance of the doc', function () {
    // Write code here that turns the phrase above into concrete actions
    this.result = undefined;
});

When('I create it', function () {
    // Write code here that turns the phrase above into concrete actions
    this.result = createDoc();
});

Then('I receive "{string}" as a result', function (result) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(typeof this.result, result)
});
