const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
    editingQuery: false,
  });
};
exports.getEditHome = (req, res, next) => {
  const editId = req.params.edithomeId;
  const editingQuery = req.query.editing === "true";
  Home.findById(editId, (home) => {
    if (!home) {
      console.log("Home is not found for edit");
      return res.redirect("/host/host-home-list");
    } else {
      return res.render("host/edit-home", {
        home: home,
        pageTitle: "Edit Your Home",
        currentPage: "host-homes",
        editingQuery: editingQuery,
      });
    }
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "host-homes",
    })
  );
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();

  res.render("host/home-added", {
    pageTitle: "Home Added Successfully",
    currentPage: "homeAdded",
  });
};
exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.id = id;
  home.save();
  res.redirect("/host/host-home-list");
};

exports.postDeleteHome = (req, res, next) => {
  const deleteId = req.params.deleteHomeId;
  Home.deleteById(deleteId, (error) => {
    res.redirect("/host/host-home-list");
    console.log("Error found in deleting the file", error);
  });
};
