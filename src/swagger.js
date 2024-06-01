import swaggerAutogen from "swagger-autogen";
const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
  host: "localhost:3000",
  tags: [
    {
      name: "User",
      description: "Endpoints related to user operations",
    },
    {
      name: "Product",
      description: "Endpoints related to product operations",
    },
    {
      name: "Payment",
      description: "Endpoints related to payment operations",
    },
    {
      name: "Stats",
      description: "Endpoints related to statistics operations",
    },
    {
      name: "Order",
      description: "Endpoints related to order operations",
    },
  ],
};

const outputFile = "./swagger-output.json";
const routes = [
  "./routes/user.routes.js",
  "./routes/product.routes.js",
  "./routes/order.routes.js",
  "./routes/payment.routes.js",
  "./routes/stats.routes.js",
];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
