let blogSite: any = [];

class Locations {
    constructor(public city: string, public ZIPcode: number, public address: string, public image: string, public date: string) {
        blogSite.push(this);
    }

    display() {
        return `
            <div class="card bg-light border border-dark mb-5" style="width: 18rem;">
                <img src="${this.image}" style="width: 100%; height: 15vw; object-fit: cover;" class="card-img-top d-none d-sm-none d-md-block d-lg-block d-xl-block" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${this.city}</h5>
                    <p class="card-text">${this.address}</p>
                    <p class="card-text">ZIP Code: ${this.ZIPcode}</p>
      `
    }

    closingTag() {
        return `
            <p class="card-text">Created: ${this.date}</p>
            </div>
            </div>
`
    }
}


class Restaurants extends Locations {
    constructor(city: string, ZIPcode: number, address: string, image: string, date: string, public cousineType: string, public webAdress: string, public telNum: string) {
        super(city, ZIPcode, address, image, date);
        this.cousineType = cousineType;
        this.webAdress = webAdress;
        this.telNum = telNum;
    }

    display() {
        return `
        ${super.display()}
        <p class="card-text">Cuisine: ${this.cousineType}</p>
        <p class="card-text">${this.webAdress}</p>
        <p class="card-text">${this.telNum}</p>
      `;
    }
}


class Events extends Locations {
    constructor(city: string, ZIPcode: number, address: string, image: string, date: string, public eventDate: string, public eventTime: string, public price: number) {
        super(city, ZIPcode, address, image, date);
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.price = price;
    }

    display() {
        return ` 
        ${super.display()}
        <p class="card-text">Event: ${this.eventDate}</p>
        <p class="card-text">From: ${this.eventTime}</p>
        <p class="card-text">Price: ${this.price} €</p>
        `
    }
}


var newLocation1 = new Locations("Chamonix", 74400, "France", "images/Ontwerp-zonder-titel-2021-04-05T191218.134-1024x768.png", "May 10, 1980 12:00:00");
var newLocation2 = new Locations("Bari", 70044, "Italy", "images/DSCF2573.jpg", "Jun 19, 1999 13:25:00");

var newRestaurant1 = new Restaurants("Aiguille Du Midi Restaurant 3842m", 74400, "France", "images/1_18371_02.jpg", "Feb 10, 1988 2:30:00", "French", "www.e-restaurantnfc.com", "+33 4 50 55 82 23");
var newRestaurant2 = new Restaurants("Ristorante Grotta Palazzese", 70044, "Italy", "images/grotta-palazzese-restaurant_1.jpg", "Dec 1, 1995 10:50:00", "French", "www.grottapalazzese.it", "+39 080 424 0677");

var newEvent1 = new Events("Breakfast with a view", 74400, "France", "images/le-3842 (1).jpg", "Sep 30, 1989 11:25:00", "Sep 19 - Sep 21", "08:00 - 10:00", 25);
var newEvent2 = new Events("Dinner with a view", 70044, "Italy", "images/download.jfif", "Apr 20, 1997 09:50:00", "Apr 25 - Apr 30", "19:00 - 21:00", 35);

for (let val of blogSite) {
    (document.getElementById("card") as HTMLElement).innerHTML += val.display() + val.closingTag();
}

//////////////////////////////////////////////////////// SORTING BUTTON UP

function sortUp() {
    blogSite.sort(function(a: string, b: string) {
        var dateA = new Date(a.date), dateB = new Date(b.date);
        return dateA - dateB;
    });


var text: string = "";

for (let val of blogSite) {
    text += val.display() + val.closingTag()
}
(document.getElementById("card") as HTMLElement).innerHTML = text;
}

(document.getElementById("sortUp") as HTMLElement).addEventListener("click", sortUp)
console.log(blogSite)

//////////////////////////////////////////////////////// SORTING BUTTON DOWN

function sortDown() {
    blogSite.sort(function (a: string, b: string) {
        var dateA = new Date(a.date), dateB = new Date(b.date);
        return dateB - dateA;
    });


var text: string = "";

for (let val of blogSite) {
    text += val.display() + val.closingTag()
}
(document.getElementById("card") as HTMLElement).innerHTML = text;
}

(document.getElementById("sortDown") as HTMLElement).addEventListener("click", sortDown)