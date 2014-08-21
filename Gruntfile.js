module.exports = function (grunt) {
    "use strict";

    var shelljs = require("shelljs");

    grunt.registerTask("outdated", "Check for outdated packages", function () {
        shelljs.exec("npm outdated --depth 0");
    });
};
