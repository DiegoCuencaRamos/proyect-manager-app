const {defaults} = require('jest-config');

module.exports = {
    verbose: true,
    // collectCoverage: true,
    // collectCoverageFrom: [
    //     "**/*.{js,jsx}",
    //     "!**/node_modules/**",
    //     "!**/vendor/**"
    // ],
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
    moduleDirectories: [
        "node_modules", "bower_components", "shared"
    ],
};