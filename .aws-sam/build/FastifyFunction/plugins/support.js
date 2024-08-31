"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = require("fastify-plugin");
// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
exports.default = (0, fastify_plugin_1.default)(async (fastify, opts) => {
    fastify.decorate('someSupport', function () {
        return 'hugs';
    });
});
