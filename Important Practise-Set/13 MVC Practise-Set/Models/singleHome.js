//Core Module
const path = require("path");
const fs = require("fs");

//local Path
const rootDir = require("../utils/PathUtils");

module.exports = class Home {
  constructor(houseName, price, location, rating, imgURL) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.imgURL = imgURL;
  }
  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const savaDataPath = path.join(rootDir, "data", "homeData.json");
      fs.writeFile(savaDataPath, JSON.stringify(registeredHomes), (err) => {
        console.log("File written concluded", err);
      });
    });
  }

  static fetchAll(call_Krke_Data_Apne_Jagah_Bhejunga) {
    const readDataFromPath = path.join(rootDir, "data", "homeData.json");
    fs.readFile(readDataFromPath, (error, data) => {
      call_Krke_Data_Apne_Jagah_Bhejunga(error ? [] : JSON.parse(data));
    });
  }
};

//Taking arugment data to create a new object with key houseName
// and value which will be given while creating instance of this class

//this means new object which is gonna created by given argument
//this function will be called with the instance of Home Class

//by creating Static we can call it by Home class using . operator
//why didn't we did it by instance of it then we had to give data also
//which is not possible for every function
//this function will be called with the instance of Home Class
