var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var blogSite = [];
var Locations = /** @class */ (function () {
    function Locations(city, ZIPcode, address, image) {
        this.city = city;
        this.ZIPcode = ZIPcode;
        this.address = address;
        this.image = image;
        blogSite.push(this);
    }
    Locations.prototype.display = function () {
        return "\n        \n            <div class=\"card m-5\" style=\"width: 18rem;\">\n                <img class=\"card-img-top img-fluid\" src=\"" + this.image + "\" alt=\"location\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">" + this.city + "</h5>\n                    <p class=\"card-text\">Country: " + this.address + "</p>\n                    <p class=\"card-text\">" + this.ZIPcode + "</p>\n                </div>\n            </div>\n        </div>\n      ";
    };
    Locations.prototype.details = function () {
        return "\n        <a href=\"#\" class=\"btn btn-primary\">Show more</a>";
    };
    return Locations;
}());
var newLocation1 = new Locations("Chamonix", 74400, "France", "images/Ontwerp-zonder-titel-2021-04-05T191218.134-1024x768.png");
var newLocation2 = new Locations("Chamonix", 74400, "France", "images/Ontwerp-zonder-titel-2021-04-05T191218.134-1024x768.png");
var newLocation3 = new Locations("Chamonix", 74400, "France", "images/Ontwerp-zonder-titel-2021-04-05T191218.134-1024x768.png");
document.getElementById("location").innerHTML += newLocation1.display();
document.getElementById("location").innerHTML += newLocation2.display();
document.getElementById("location").innerHTML += newLocation3.display();
// document.getElementById("btn").addEventListener("click", newLocation.details);
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(city, ZIPcode, address, image, cousineType, webAdress, telNum) {
        var _this = _super.call(this, city, ZIPcode, address, image) || this;
        _this.cousineType = cousineType;
        _this.webAdress = webAdress;
        _this.telNum = telNum;
        _this.cousineType = cousineType;
        _this.webAdress = webAdress;
        _this.telNum = telNum;
        return _this;
    }
    Restaurants.prototype.printMore = function () {
        return " \n            <div class=\"card m-5\" style=\"width: 18rem;\">\n                <img class=\"card-img-top img-fluid\" src=\"" + this.image + "\" alt=\"location\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">" + this.city + "</h5>\n                    <p class=\"card-text\">Country: " + this.address + "</p>\n                    <p class=\"card-text\">Cuisine: " + this.cousineType + "</p>\n                    <p class=\"card-text\">" + this.webAdress + "</p>\n                    <p class=\"card-text\">Tel.:" + this.telNum + "</p>\n                </div>\n            </div>\n\n        ";
    };
    return Restaurants;
}(Locations));
var newRestaurant1 = new Restaurants("Aiguille Du Midi Restaurant 3842m", 74400, "France", "images/1_18371_02.jpg", "French", "www.e-restaurantnfc.com", "+33 4 50 55 82 23");
var newRestaurant2 = new Restaurants("Aiguille Du Midi Restaurant 3842m", 74400, "France", "images/1_18371_02.jpg", "French", "www.e-restaurantnfc.com", "+33 4 50 55 82 23");
var newRestaurant3 = new Restaurants("Aiguille Du Midi Restaurant 3842m", 74400, "France", "images/1_18371_02.jpg", "French", "www.e-restaurantnfc.com", "+33 4 50 55 82 23");
document.getElementById("restaurant").innerHTML += newRestaurant1.printMore();
document.getElementById("restaurant").innerHTML += newRestaurant2.printMore();
document.getElementById("restaurant").innerHTML += newRestaurant3.printMore();
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(city, ZIPcode, address, image, eventDate, eventTime) {
        var _this = _super.call(this, city, ZIPcode, address, image) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        return _this;
    }
    Events.prototype.printMore = function () {
        return " \n                <div class=\"card m-5\" style=\"width: 18rem;\">\n                    <img class=\"card-img-top img-fluid\" src=\"" + this.image + "\" alt=\"location\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">" + this.city + "</h5>\n                            <p class=\"card-text\">" + this.eventDate + "</p>\n                            <p class=\"card-text\">" + this.eventTime + "</p>\n                        </div>\n                </div>\n\n        ";
    };
    return Events;
}(Locations));
var newEvent1 = new Events("Breakfast with a view", 74400, "France", "images/le-3842 (1).jpg", "French", "aiugefiauv");
var newEvent2 = new Events("Breakfast with a view", 74400, "France", "images/le-3842 (1).jpg", "French", "aiugefiauv");
var newEvent3 = new Events("Breakfast with a view", 74400, "France", "images/le-3842 (1).jpg", "French", "aiugefiauv");
document.getElementById("event").innerHTML += newEvent1.printMore();
document.getElementById("event").innerHTML += newEvent2.printMore();
document.getElementById("event").innerHTML += newEvent3.printMore();
for (var _i = 0, blogSite_1 = blogSite; _i < blogSite_1.length; _i++) {
    var val = blogSite_1[_i];
    document.getElementById("print").innerHTML += val.display();
}
