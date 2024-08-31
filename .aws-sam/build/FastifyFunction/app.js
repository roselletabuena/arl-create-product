"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.app = void 0;
const path_1 = require("path");
const autoload_1 = require("@fastify/autoload");
// Pass --options via CLI arguments in command to enable these options.
const options = {};
exports.options = options;
const app = async (fastify, opts) => {
    // Place here your custom code!
    // Do not touch the following lines
    // This loads all plugins defined in plugins
    // those should be support plugins that are reused
    // through your application
    void fastify.register(autoload_1.default, {
        dir: (0, path_1.join)(__dirname, 'plugins'),
        options: opts
    });
    // This loads all plugins defined in routes
    // define your routes in one of these
    void fastify.register(autoload_1.default, {
        dir: (0, path_1.join)(__dirname, 'routes'),
        options: opts
    });
};
exports.app = app;
exports.default = app;
