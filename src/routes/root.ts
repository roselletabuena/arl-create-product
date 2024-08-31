import { FastifyPluginAsync } from 'fastify'
import { DynamoDB } from "@aws-sdk/client-dynamodb";

const dynamodb = new DynamoDB({ apiVersion: '2011-12-05' });

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {



  fastify.post('/', async function (request, reply) {

    console.log("request: ", request)

    const params: any = {
      Item: {
        "id": { S: "$#@$fefsdafsdfdsa" },
        "name": { S: "Patis" },
        "price": { N: "20" }
      },
      TableName: "arl-products"
    };

    const data = await dynamodb.putItem(params);

    return { root: data }
  })
}

export default root;
