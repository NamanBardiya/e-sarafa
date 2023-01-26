const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/shop.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/shops", controller.getAll);
  app.get("/api/shops/:name", controller.getByName);
  app.patch("/api/shops/:name", controller.updateShop);

  app.get("/api/loans", controller.getAllLoans);
  app.get("/api/loans/:name", controller.getLoanByName);
  app.patch("/api/loans/:name", controller.updateLoan);

};




