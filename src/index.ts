import Fastify from "fastify";
import awsLambdaFastify from "@fastify/aws-lambda";
import { APIGatewayEvent, Context } from "aws-lambda";
import root from "./routes/root";

const fastify = Fastify();
fastify.register(root);

const lambdaHandler = awsLambdaFastify(fastify);

export const handler = async (event: APIGatewayEvent, context: Context) => {
  return lambdaHandler(event, context);
};
