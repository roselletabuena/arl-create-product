import { FastifyPluginAsync } from "fastify";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  PutCommand,
  PutCommandInput,
} from "@aws-sdk/lib-dynamodb";
import { generateRandomId, generateProductId, dynamoConfig } from "../utils";
import { Product } from "../models/productInterfaces";

const client = new DynamoDBClient(dynamoConfig());
const dynamodb = DynamoDBDocumentClient.from(client);

const root: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.post("/", async (request, reply) => {
    const body: Product = request.body as Product;

    try {
      const params: PutCommandInput = {
        Item: {
          id: generateRandomId(),
          productId: generateProductId(),
          ...body,
        },
        TableName: process.env.TABLE_NAME,
      };

      const data = await dynamodb.send(new PutCommand(params));

      reply.status(200).send({ response: data });
    } catch (error) {
      fastify.log.error(error);
      reply
        .status(500)
        .send({ error: "An error occurred while processing your request." });
    }
  });
};

export default root;
