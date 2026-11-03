const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
};
exports.handler = async () => ({
  statusCode: 200,
  headers,
  body: JSON.stringify({
    message: "SmartStock orders API",
    orders: []
  })
});
