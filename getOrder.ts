import type { APIGatewayProxyEventV2 } from "aws-lambda"

export const getOrderById = async (event: APIGatewayProxyEventV2) => {
  const { pathParameters } = event

  return pathParameters?.orderId
}