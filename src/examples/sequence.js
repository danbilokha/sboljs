const SBOLDocument = require('../../lib/SBOLDocument');
const {Sequence} = require('../../lib/Sequence');

function createSequence(sbol) {
    // return new (sbol, 'http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html');
    return sbol.sequence('http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html');
}

module.exports = {
    createSequence
};
