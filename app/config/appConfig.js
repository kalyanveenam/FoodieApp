let config = {
  apiVersion: "/api/v1",
  PORT: process.env.PORT || 3002,
  JWT_SECRET:"smkccss",
  mongodb: {
    produrl: "mongodb+srv://admin:foodie@2021@cluster0.luwaj.mongodb.net/foodie",
  localurl:"mongodb://localhost:27017/todolist"
  },
  env: "prod",
};

module.exports = { config: config };
