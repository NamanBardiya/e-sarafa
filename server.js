const express = require("express");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");
const dotenv = require('dotenv');
dotenv.config();
//console.log(`Your port is ${process.env.PORT}`);

const app = express();

var corsOptions = {
  origin: "https://e-sarafa.onrender.com/"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;
const Shop = db.shop;
const User = db.user;
const Loan = db.Loan;

db.mongoose
  .connect(`mongodb+srv://NamanBardiya:${process.env.MONGO_URI}@cluster0.sp2zple.mongodb.net/e_sarafa_db?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to esarafav2 application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/shop.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });

  User.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new User(
     
      {
        "roles": [
          
        ],
        "username": "naman test1",
        "email": "nt1@gmail.com",
        "password": "$2a$08$T3Jx2yIfEqpbIxQZOovehu5EJi.CihkZh7uRD7N26KMYJA53.ftlC",
        "__v": 1
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added entry to user collection");
      });

      
    }
  });

  Shop.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Shop(
     
        {
          
          "name": "shop 001",
          "description": "Loans available with best interest rates here!",
          "owners": [
            "test1"
          ],
          "borrowers": [],
          "loans": []
        }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added entry to shop collection");
      });

      
    }
  });

  
}
