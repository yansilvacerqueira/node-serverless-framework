import { APIGatewayProxyEventV2 } from "aws-lambda";

export const hello = async (event: APIGatewayProxyEventV2) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v4! Your function executed successfully!",
    }),
  };
};
