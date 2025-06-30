//Fake DataBase
const registeredHomes = [];

module.exports = class Home{
    constructor(houseName, price, location, rating, imgURL){
        //Taking arugment data to create a new object with key houseName 
        // and value which will be given while creating instance of this class
        this.houseName = houseName;
        this.price = price;
        this.location =  location;
        this.rating = rating;
        this.imgURL = imgURL;
    }
    save(){
        //this means new object which is gonna created by given argument
        //this function will be called with the instance of Home Class
        registeredHomes.push(this);
    }

    //by creating Static we can call it by Home class using . operator
    //why didn't we did it by instance of it then we had to give data also which is not possible for every function
    //this function will be called with the instance of Home Class
    static fetchAll(){
        return registeredHomes;
    }

}