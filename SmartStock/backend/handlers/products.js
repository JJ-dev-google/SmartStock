const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
};

exports.handler = async (event) => {
  const method = event.httpMethod || "GET";
  if (method === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (method === "GET") {
    return {
      statusCode: 200, headers,
      body: JSON.stringify({
        message: "SmartStock product API is running",
        products: []
      })
    };
  }

  if (method === "POST") {
    let product;
    try {
      product = JSON.parse(event.body || "{}");
      if (!product.name || !Number.isFinite(Number(product.quantity))) {
        throw new Error("Invalid product");
      }
    } catch {
      return {
        statusCode: 400, headers,
        body: JSON.stringify({ error: "Invalid product data" })
      };
    }
    return {
      statusCode: 201, headers,
      body: JSON.stringify({ message: "Product accepted", product })
    };
  }

  return {
    statusCode: 405, headers,
    body: JSON.stringify({ error: "Method not allowed" })
  };
};
