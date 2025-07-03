// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const FavouriteDataPath = path.join(rootDir, "data", "favourite.json");

module.exports = class Favourite {
  static addFavourites(homeId, callback) {
    Favourite.getFavourites((previousHomeIds) => {
      if (previousHomeIds.includes(homeId)) {
        callback("home is already in favourites");
      } else {
        previousHomeIds.push(homeId);
        fs.writeFile(
          FavouriteDataPath,
          JSON.stringify(previousHomeIds),
          callback
        );
      }
    });
  }
  static getFavourites(callback) {
    fs.readFile(FavouriteDataPath, (error, data) => {
      const favDataId = JSON.parse(data);
      callback(!error ? favDataId : []);
    });
  }
  static removeFavourites(removeHomeId, callback){
    Favourite.getFavourites(favHomeIds=> {
      const filteredHomeIds = favHomeIds.filter(favHomeid => favHomeid !== removeHomeId);
      fs.writeFile(FavouriteDataPath, JSON.stringify(filteredHomeIds), error => {
            console.log("removing favourites if error:", error)
          });
      callback(filteredHomeIds);
    })
  }
};
