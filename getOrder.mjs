export const getOrderById = async (event) => {
  const { pathParameters } = event

  return pathParameters.orderId
}