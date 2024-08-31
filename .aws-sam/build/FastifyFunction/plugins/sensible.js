"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = require("fastify-plugin");
const sensible_1 = require("@fastify/sensible");
/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
exports.default = (0, fastify_plugin_1.default)(async (fastify) => {
    fastify.register(sensible_1.default);
});
