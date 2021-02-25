const {defaults} = require('jest-config');

module.exports = {
    setupFilesAfterEnv: [
        "<rootDir>src/tests/setupTests.js"
    ],
    // To make shapshots working
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ],
    moduleFileExtensions: [
        ...defaults.moduleFileExtensions,
         'ts',
          'tsx'
    ],
};