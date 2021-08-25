const generate_routes = require("./generate_routes");

const verifyToken = require("../middleware/verify-token");

const role_controller = require("../controller/role-controller");
const company_controller = require("../controller/company-controller");
const jobType_controller = require("../controller/jobType-controller");
const auth_controller = require("../controller/auth-controller");
const account_controller = require("../controller/account-controller");
const customer_controller = require("../controller/customer-controller");
const job_controller = require("../controller/job-controller");

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
    path: "/job",
    children: [
      {
        path: "/get",
        handler: job_controller.get,
        method: "get",
      },
      {
        path: "/create",
        handler: job_controller.create,
        method: "post",
      },
    ],
  },
];

module.exports = generate_routes(routes);
