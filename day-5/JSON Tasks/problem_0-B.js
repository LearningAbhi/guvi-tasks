var myCar = {
    make: "Bugatti",
    model: "Bugatti La Voiture Noire",
    year: 2019,
    accidents: [
        {
            date: "3/15/2019",
            damage_points: "5000",
            atFaultForAccident: true,
        },
        {
            date: "7/04/2022", // added one 0 in month to format like other dates in the objects
            damage_points: "2200",
            atFaultForAccident: true,
        },
        {
            date: "6/22/2021",
            damage_points: "7900",
            atFaultForAccident: true,
        },
    ],
};


// 1. Loop over the accidents array. Change atFaultForAccident from true to false.

for (let i in myCar.accidents) {
    myCar.accidents[i].atFaultForAccident = false;
}


// 2. Print the dates of my accidents

for (let i in myCar.accidents) {
    console.log(myCar.accidents[i].date);
}

// console.log(myCar)