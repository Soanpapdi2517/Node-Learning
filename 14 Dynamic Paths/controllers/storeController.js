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

exports.postRemoved = (req,res,next)=>{
  const removeId = req.body.id;
  Favourite.removeFavourites(removeId, filteredHomeIds=> {
    res.redirect("/favourites");
  })
  
}
