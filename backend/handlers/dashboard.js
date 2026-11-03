exports.handler = async () => ({
  statusCode: 200,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
  body: JSON.stringify({
    platform: "SmartStock",
    status: "healthy",
    metrics: { products: 0, orders: 0 }
  })
});
