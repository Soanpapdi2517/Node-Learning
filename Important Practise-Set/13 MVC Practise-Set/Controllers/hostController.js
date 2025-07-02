const Home = require("../Models/singleHome");

exports.getAddHomePage = (req, res, next) => {
  res.render("host/add-home", {
    titleName: "Add Home here",
    currentPage: "addHome",
  });
};

exports.postAddHomeSuccessPage = (req, res, next) => {
  const { houseName, Price, Location, Rating, Image } = req.body;
  const home = new Home(houseName, Price, Location, Rating, Image);
  home.save();
  res.render("host/successful", { titleName: "Added Successfully" });
};

exports.getHostHomeList = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      titleName: "Host HomeLists",
      currentPage: "hostHomeList",
    });
  });
};