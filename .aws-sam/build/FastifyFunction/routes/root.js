"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const dynamodb = new client_dynamodb_1.DynamoDB({ apiVersion: '2011-12-05' });
const root = async (fastify, opts) => {
    fastify.post('/', async function (request, reply) {
        console.log("request: ", request);
        const params = {
            Item: {
                "id": { S: "$#@$fefsdafsdfdsa" },
                "name": { S: "Patis" },
                "price": { N: "20" }
            },
            TableName: "arl-products"
        };
        const data = await dynamodb.putItem(params);
        return { root: data };
    });
};
exports.default = root;
