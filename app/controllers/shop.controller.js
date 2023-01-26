const db = require("../models");
const User = db.user;
const Role = db.role;
const Loan = db.loan;
const Shop = db.shop;

exports.getAll = async (req, res) => {
    try {
      const shopListItems = await Shop.find();
      if (!shopListItems) throw new Error("No shopListItems");
      res.status(200).json(shopListItems);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.getByName = async (req, res) => {
    const {name} = req.params;
    try {
      const shopListItems = await Shop.findOne({name:name});

      if (!shopListItems) throw new Error("No shopListItems");
      res.status(200).json(shopListItems);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.updateShop = async (req, res) => {
    const {name} = req.params
    console.log(req.params)
    try{
    const shop = Shop.findOneAndUpdate({name: name},
      {
        name: req.body.shopname,
        description: req.body.description
      }
      );
    
    if (!shop) throw new Error("No shopListItem");
    res.send({ message: "Shop was updated successfully!" });
    console.log('shop created');
    }
    catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  exports.getAllLoans = async (req, res) => {
    try {
      const shopListItems = await Shop.find();
      if (!shopListItems) throw new Error("No shopListItems");
      res.status(200).json(shopListItems);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.getLoanByName = async (req, res) => {
    const {name} = req.params;
    try {
      const shopListItems = await Shop.findOne({name:name});

      if (!shopListItems) throw new Error("No shopListItems");
      res.status(200).json(shopListItems);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.updateLoan = async (req, res) => {
    const {name} = req.params
    console.log(req.params)
    const shop = Shop.findOne({name:name});

    if (!shopListItems) throw new Error("No shopListItem");
    shop.name = req.body.shopname;
    shop.description = req.body.description;
    Shop.save((err, shop) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
    }
      );

      res.send({ message: "Shop was updated successfully!" });

  }