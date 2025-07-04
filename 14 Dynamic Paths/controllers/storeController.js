const Favourite = require("../models/Favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    })
  );
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
    })
  );
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    if (!home) {
      return res.redirect("/homes");
    } else {
      return res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Detail",
        currentPage: "homes",
        homeId: homeId,
      });
    }
  });
};
// Favourites functionality
// Add to Favourtites
exports.postFavourite = (req, res, next) => {
  const favHomeId = req.body.id;
  Favourite.addFavourites(favHomeId, (error) => {
    if (error) {
      console.log("Error adding favourite:", error);
      return res.redirect("/homes");
    }
    res.redirect("/favourites");
  });
};
// get Favourite list
exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites((favouriteHomeIds) => {
    Home.fetchAll((registeredHomes) => {
      const favouriteHomeList = registeredHomes.filter((home) =>
        favouriteHomeIds.includes(home.id)
      );
      res.render("store/favourite-list", {
        favouriteHomeList: favouriteHomeList,
        pageTitle: "My Favourites",
        currentPage: "favourites",
      });
    });
  });
};
//  remove from get Favourite list
exports.postRemoved = (req, res, next) => {
  const removeId = req.body.id;
  Favourite.removeFavourites(removeId, (error) => {
    console.log("Error found in Removing from Favourites", error);
    res.redirect("/favourites");
  });
};
