exports.get404 = (req, res, next) => {
  res.status(404).render("404ErrorPage", {titleName: 'Page Not Found'});
}