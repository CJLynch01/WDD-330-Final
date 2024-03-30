const url1 = "../json/primary.json"
const url2 = "../json/accessory.json"

export function fetchprimarylift(primarylifts) {
    fetch(url1)
    .then(res => res.json())
    .then(data => loadprimarylift(data, primarylifts))
    .catch(err => console.log(err))
}

//load primary lifts from JSON file
export function loadprimarylift(data, primarylifts) {
    console.log("data received:", data);
    for(var key in data) {
        var list=data[key];
        for(var obj in list) {
            var opt = document.createElement("option");
            opt.text = list[obj];
            opt.value = list[obj];
            primarylifts.add(opt);
        }
    }
}

//fetch accessory lifts from JSON file
export function fetchaccessorylift(secondarylifts) {
    fetch(url2)
    .then(res => res.json())
    .then(data => loadaccessorylift(data, secondarylifts))
    .catch(err => console.log(err))
}

//load accessory lifts from JSON file
export function loadaccessorylift(data, accessorylifts) {
    console.log("data received:", data);
    for(var key in data){
        var list=data[key];
        for(var obj in list) {
            var opt = document.createElement("option");
            opt.text = list[obj];
            opt.value = list[obj];
            accessorylifts.add(opt);
        }
    }
}