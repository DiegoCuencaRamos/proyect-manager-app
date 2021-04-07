const {defaults} = require('jest-config');

module.exports = {
    // To get extra info about test running
    verbose: true,
    // collectCoverage: true,
    // collectCoverageFrom: [
    //     "**/*.{js,jsx}",
    //     "!**/node_modules/**",
    //     "!**/vendor/**"
    // ],
    // To set env config
    setupFilesAfterEnv: [
        "<rootDir>src/tests/setupTests.js"
    ],
    // To make shapshots working
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ],
    // To mock assets (CSS and Imgs)
    moduleNameMapper: {
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/tests/__mocks__/fileMock.js",
        "\\.(css|less)$": "<rootDir>/src/tests/__mocks__/fileMock.js"
    },
    moduleFileExtensions: [
        ...defaults.moduleFileExtensions,
        'ts',
        'tsx'
    ],
    moduleDirectories: [
        "node_modules", "bower_components", "shared"
    ],
};