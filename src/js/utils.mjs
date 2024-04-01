const url1 = "../json/primary.json"
const url2 = "../json/accessory.json"

const primarylifts = new Set();

export function fetchprimarylift() {
    fetch(url1)
    .then(res => {
        return res.json();
    })
    .then(data => {
        loadprimarylift(data);
    })
    .catch(err => console.log(err))
}

//load primary lifts from JSON file
export function loadprimarylift(data) {
    const listContainer = document.getElementById('primarylifts');
    for (var key in data) {
        var list = data[key];
        for (var obj in list) {
            var opt = document.createElement("option");
            opt.text = list[obj];
            opt.value = list[obj];
            primarylifts.add(opt);
            listContainer.options[listContainer.options.length]= new Option(opt.text, opt.value)
        }
    }
}


const accessorylifts = new Set();

//fetch accessory lifts from JSON file
export function fetchaccessorylift() {
    fetch(url2)
    .then(res => {
        return res.json();
    })
    .then(data => {
        loadaccessorylift(data);
    })
    .catch(err => console.log(err))
}

//load accessory lifts from JSON file
export function loadaccessorylift(data) {
    const listContainer = document.getElementById('accessorylifts');
    for (var key in data) {
        var list = data[key];
        for (var obj in list) {
            var opt = document.createElement("option");
            opt.text = list[obj];
            opt.value = list[obj];
            accessorylifts.add(opt);
            listContainer.options[listContainer.options.length]= new Option(opt.text, opt.value)

        }
    }
}

