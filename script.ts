let blogSite: any = [];

class Locations {
    constructor(public city: string, public ZIPcode: number, public address: string, public image: string) {
        blogSite.push(this);
    }

    display() {
        return `
        
            <div class="card m-5" style="width: 18rem;">
                <img class="card-img-top img-fluid" src="${this.image}" alt="location">
                <div class="card-body">
                    <h5 class="card-title">${this.city}</h5>
                    <p class="card-text">Country: ${this.address}</p>
                    <p class="card-text">${this.ZIPcode}</p>
                </div>
            </div>
        </div>
      `;
    }

    details() {
        return `
        <a href="#" class="btn btn-primary">Show more</a>`
    }
}


var newLocation1 = new Locations("Chamonix", 74400, "France", "images/Ontwerp-zonder-titel-2021-04-05T191218.134-1024x768.png");
var newLocation2 = new Locations("Chamonix", 74400, "France", "images/Ontwerp-zonder-titel-2021-04-05T191218.134-1024x768.png");
var newLocation3 = new Locations("Chamonix", 74400, "France", "images/Ontwerp-zonder-titel-2021-04-05T191218.134-1024x768.png");

document.getElementById("location").innerHTML += newLocation1.display();
document.getElementById("location").innerHTML += newLocation2.display();
document.getElementById("location").innerHTML += newLocation3.display();

// document.getElementById("btn").addEventListener("click", newLocation.details);


class Restaurants extends Locations {
    constructor(city: string, ZIPcode: number, address: string, image: string, public cousineType: string, public webAdress: string, public telNum: string) {
        super(city, ZIPcode, address, image);
        this.cousineType = cousineType;
        this.webAdress = webAdress;
        this.telNum = telNum;
    }

    printMore() {
        return ` 
            <div class="card m-5" style="width: 18rem;">
                <img class="card-img-top img-fluid" src="${this.image}" alt="location">
                <div class="card-body">
                    <h5 class="card-title">${this.city}</h5>
                    <p class="card-text">Country: ${this.address}</p>
                    <p class="card-text">Cuisine: ${this.cousineType}</p>
                    <p class="card-text">${this.webAdress}</p>
                    <p class="card-text">Tel.:${this.telNum}</p>
                </div>
            </div>

        `
    }
}

var newRestaurant1 = new Restaurants ("Aiguille Du Midi Restaurant 3842m", 74400, "France", "images/1_18371_02.jpg", "French", "www.e-restaurantnfc.com", "+33 4 50 55 82 23" );
var newRestaurant2 = new Restaurants ("Aiguille Du Midi Restaurant 3842m", 74400, "France", "images/1_18371_02.jpg", "French", "www.e-restaurantnfc.com", "+33 4 50 55 82 23" );
var newRestaurant3 = new Restaurants ("Aiguille Du Midi Restaurant 3842m", 74400, "France", "images/1_18371_02.jpg", "French", "www.e-restaurantnfc.com", "+33 4 50 55 82 23" );


document.getElementById("restaurant").innerHTML += newRestaurant1.printMore();
document.getElementById("restaurant").innerHTML += newRestaurant2.printMore();
document.getElementById("restaurant").innerHTML += newRestaurant3.printMore();



class Events extends Locations {
    constructor(city: string, ZIPcode: number, address: string, image: string, public eventDate: string, public eventTime: string) {
        super(city, ZIPcode, address, image);
        this.eventDate = eventDate;
        this.eventTime = eventTime;
    }

    printMore() {
        return ` 
                <div class="card m-5" style="width: 18rem;">
                    <img class="card-img-top img-fluid" src="${this.image}" alt="location">
                        <div class="card-body">
                            <h5 class="card-title">${this.city}</h5>
                            <p class="card-text">${this.eventDate}</p>
                            <p class="card-text">${this.eventTime}</p>
                        </div>
                </div>

        `
    }
}


var newEvent1 = new Events ("Breakfast with a view", 74400, "France", "images/le-3842 (1).jpg", "French", "aiugefiauv");
var newEvent2 = new Events ("Breakfast with a view", 74400, "France", "images/le-3842 (1).jpg", "French", "aiugefiauv");
var newEvent3 = new Events ("Breakfast with a view", 74400, "France", "images/le-3842 (1).jpg", "French", "aiugefiauv");


document.getElementById("event").innerHTML += newEvent1.printMore();
document.getElementById("event").innerHTML += newEvent2.printMore();
document.getElementById("event").innerHTML += newEvent3.printMore();



for (let val of blogSite) {
    (document.getElementById("print") as HTMLElement).innerHTML += val.display();
}