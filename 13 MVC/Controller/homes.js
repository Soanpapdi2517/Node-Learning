exports.getHomePage = (req, res, next) => {
  res.render("home", {
    registeredHomes: registeredHomes,
    titleName: "airbnb Home",
    currentPage: "home",
  });
};

const registeredHomes = [];

exports.getAddHomePage = (req, res, next) => {
  res.render("addHome", { titleName: "Add Home here", currentPage: "addHome" });
};

exports.postAddHomeSuccessPage = (req, res, next) => {
  registeredHomes.push({
    houseName: req.body.houseName,
    price: req.body.Price,
    location: req.body.Location,
    rating: req.body.rating,
    img: req.body.Image,
  });
  console.log(req.body);
  res.render("successful", { titleName: "Added Successfully" });
};

exports.get404 = (req, res, next) => {
  res.status(404).render("404ErrorPage", {titleName: 'Page Not Found'});
}
// exports.registeredHomes = registeredHomes;
// No need because when we used to export we do it for UserRouter file
// but now all the use of registeredHomes use is here so we don't need it
