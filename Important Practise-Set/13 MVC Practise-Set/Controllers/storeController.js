const Home = require("../Models/singleHome");

exports.getHomeList = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      titleName: "My HomeLists",
      currentPage: "homelist",
    });
  });
};
exports.getTrips = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/trips", {
      registeredHomes: registeredHomes,
      titleName: "My Trips",
      currentPage: "trips",
    });
  });
};
exports.getWishlist = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/wishlist", {
      registeredHomes: registeredHomes,
      titleName: "My Wishlist",
      currentPage: "Wishlist",
    });
  });
};
exports.getReservations = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/reservations", {
      registeredHomes: registeredHomes,
      titleName: "My Reservations",
      currentPage: "reservations",
    });
  });
};
exports.getMainPage = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/index", {
      registeredHomes: registeredHomes,
      titleName: "Airbnb Home",
      currentPage: "home",
    });
  });
};

// exports.registeredHomes = registeredHomes;
// No need because when we used to export we do it for UserRouter file
// but now all the use of registeredHomes use is here so we don't need it
