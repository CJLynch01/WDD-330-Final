const url1 = "../json/primary.json"
const url2 = "../json/accessory.json"

const primarylifts = new Set();

export function fetchprimarylift(data) {
    fetch(url1)
    .then(res => {
        console.log("Response received:", res);
        return res.json();
    })
    .then(data => {
        console.log("Data received:", data);
        loadprimarylift(data);
    })
    .catch(err => console.log(err))
}

//load primary lifts from JSON file
export function loadprimarylift(data) {
    console.log("data received:", data);
    for (var key in data) {
        var list = data[key];
        for (var obj in list) {
            var opt = document.createElement("option");
            opt.text = list[obj];
            opt.value = list[obj];
            primarylifts.add(opt);
        }
    }
}


const accessorylifts = new Set();

//fetch accessory lifts from JSON file
export function fetchaccessorylift() {
    fetch(url2)
    .then(res => {
        console.log("Response received:", res);
        return res.json();
    })
    .then(data => {
        console.log("Data received:", data);
        loadaccessorylift(data);
    })
    .catch(err => console.log(err))
}

//load accessory lifts from JSON file
export function loadaccessorylift(data) {
    console.log("data received:", data);
    for (var key in data) {
        var list = data[key];
        for (var obj in list) {
            var opt = document.createElement("option");
            opt.text = list[obj];
            opt.value = list[obj];
            accessorylifts.add(opt);
        }
    }
}

