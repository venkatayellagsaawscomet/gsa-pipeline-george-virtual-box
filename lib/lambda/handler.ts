import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  return {
    body: 'Hello from a Dummy Lambda Function \n COMPLETED.... 1. Does the pipeline correctly fire off when we check in code change (base test of the pipeline)? !!!',
    statusCode: 400,
  };
}

