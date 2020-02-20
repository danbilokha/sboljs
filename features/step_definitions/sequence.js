const assert = require('assert');
const {createDoc} = require('../../src/examples/getting-started');
const {createSequence} = require('../../src/examples/sequence');
const {Given, When, Then} = require('cucumber');

Given('Sequence', function () {
    this.sequence = createSequence(createDoc());
});
When('I get elements', function () {
    this.elements = this.sequence.elements;
});

Then('I see elements', function () {
    assert.equal(
        typeof !!this.elements,
        'boolean'
    );
});
