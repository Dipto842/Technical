const path = require("path");

module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [path.resolve(__dirname, "jest.setup.js")],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
