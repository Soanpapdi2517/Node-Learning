const Home = require("../Models/singleHome");

exports.getHomePage = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("home", {
      registeredHomes: registeredHomes,
      titleName: "airbnb Home",
      currentPage: "home",
    });
  });
};

exports.getAddHomePage = (req, res, next) => {
  res.render("addHome", {
    titleName: "Add Home here",
    currentPage: "addHome",
  });
};

exports.postAddHomeSuccessPage = (req, res, next) => {
  const { houseName, Price, Location, Rating, Image } = req.body;
  const home = new Home(houseName, Price, Location, Rating, Image);
  home.save();
  console.log(req.body);
  res.render("successful", { titleName: "Added Successfully" });
};

// exports.registeredHomes = registeredHomes;
// No need because when we used to export we do it for UserRouter file
// but now all the use of registeredHomes use is here so we don't need it
