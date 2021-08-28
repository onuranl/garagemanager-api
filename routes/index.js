const generate_routes = require("./generate_routes");

const verifyToken = require("../middleware/verify-token");

const role_controller = require("../controller/role-controller");
const company_controller = require("../controller/company-controller");
const jobType_controller = require("../controller/jobType-controller");
const auth_controller = require("../controller/auth-controller");
const account_controller = require("../controller/account-controller");
const customer_controller = require("../controller/customer-controller");
const vehicle_controller = require("../controller/vehicle-controller");
const job_controller = require("../controller/job-controller");
const store_controller = require("../controller/store-controller");
const product_controller = require("../controller/product-controller");
const date_controller = require("../controller/date-controller");

const routes = [
  {
    path: "/role",
    children: [
      {
        path: "/create",
        handler: role_controller.create,
        method: "post",
      },
    ],
  },
  {
    path: "/company",
    children: [
      {
        path: "/create",
        handler: company_controller.create,
        method: "post",
      },
    ],
  },
  {
    path: "/jobtype",
    children: [
      {
        path: "/get",
        handler: jobType_controller.get,
        method: "get",
      },
      {
        path: "/create",
        handler: jobType_controller.create,
        method: "post",
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "/login",
        validation: auth_controller.login_validation,
        method: "post",
        handler: auth_controller.login,
      },
      {
        path: "/register",
        validation: auth_controller.register_validation,
        method: "post",
        handler: auth_controller.register,
      },
      {
        path: "/user",
        method: "get",
        handler: account_controller.me,
        middleware: verifyToken,
      },
    ],
  },
  {
    path: "/customer",
    children: [
      {
        path: "/create",
        handler: customer_controller.create,
        method: "post",
      },
      {
        path: "/addvehicle/:id",
        handler: customer_controller.addVehicle,
        method: "post",
      },
      {
        path: "/:id",
        handler: customer_controller.get,
        method: "get",
      },
      {
        path: "/getvehicle/:id",
        handler: customer_controller.getVehicle,
        method: "get",
      },
    ],
  },
  {
    path: "/vehicle",
    children: [
      {
        path: "/get/:id",
        handler: vehicle_controller.get,
        method: "get",
      },
      {
        path: "/create",
        handler: vehicle_controller.create,
        method: "post",
      },
    ],
  },
  {
    path: "/job",
    children: [
      {
        path: "/get/:id",
        handler: job_controller.get,
        method: "get",
      },
      {
        path: "/complete/:id",
        handler: job_controller.complete,
        method: "put",
      },
      {
        path: "/create",
        handler: job_controller.create,
        method: "post",
      },
      {
        path: "/update/:id",
        handler: job_controller.update,
        method: "put",
      },
      {
        path: "/remove/:id",
        handler: job_controller.remove,
        method: "delete",
      },
    ],
  },
  {
    path: "/store",
    children: [
      {
        path: "/:id",
        handler: store_controller.get,
        method: "get",
      },
      {
        path: "/detail/:id",
        handler: store_controller.getByStoreID,
        method: "get",
      },
      {
        path: "/create",
        handler: store_controller.create,
        method: "post",
      },
      {
        path: "/update/:id",
        handler: store_controller.update,
        method: "put",
      },
      {
        path: "/remove/:id",
        handler: store_controller.remove,
        method: "delete",
      },
    ],
  },
  {
    path: "/product",
    children: [
      {
        path: "/:id",
        handler: product_controller.get,
        method: "get",
      },
      {
        path: "/category/:id",
        handler: product_controller.getCategory,
        method: "get",
      },
      {
        path: "/create",
        handler: product_controller.create,
        method: "post",
      },
      {
        path: "/createcategory",
        handler: product_controller.createCategory,
        method: "post",
      },
    ],
  },
  {
    path: "/date",
    children: [
      {
        path: "/:id",
        handler: date_controller.get,
        method: "get",
      },
      {
        path: "/create",
        handler: date_controller.create,
        method: "post",
      },
      {
        path: "/remove/:id",
        handler: date_controller.remove,
        method: "delete",
      },
    ],
  },
];

module.exports = generate_routes(routes);
