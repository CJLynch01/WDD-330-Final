const url1 = "../json/primary.json"
const url2 = "../json/accessory.json"

export async function fetchprimarylift(primarylifts) {
    await fetch(url1)
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
export async function fetchaccessorylift(secondarylifts) {
    await fetch(url2)
    .then(res => res.json())
    .then(data => loadaccessorylift(data, secondarylifts))
    .catch(err => console.log(err))
}

//load accessory lifts from JSON file
export function loadaccessorylift(data, secondarylifts) {
    for(var key in data){
        var list=data[key]
        for(var obj in list) {
            var opt = document.createElement("option");
            opt.text = list[obj];
            opt.value = list[obj];
            secondarylifts.add(opt);
        }
    }
}