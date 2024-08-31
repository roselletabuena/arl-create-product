"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const fastify_1 = require("fastify");
const aws_lambda_1 = require("@fastify/aws-lambda");
const root_1 = require("./routes/root");
const handler = async (event, context) => {
    const fastify = (0, fastify_1.default)();
    await fastify.register(root_1.default);
    const lambdaHandler = (0, aws_lambda_1.default)(fastify);
    return lambdaHandler(event, context);
};
exports.handler = handler;
