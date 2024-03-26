const url1 = "../json/primary.json"
const url2 = "../json/accessory.json"
const primarylifts = document.getElementById("primarylifts")
const secondarylifts = document.getElementById("accessorylifts")


//fetch primary lifts from JSON file
async function fetchprimarylift() {
    await fetch(url1)
    .then(res => res.json())
    .then(data => loadprimarylift(data))
    .catch(err => console.log(err))
}
//load primary lifts from JSON file
function loadprimarylift(data) {
    for(var key in data){
    var list=data[key]
        for(var obj in list)
        {
            var opt = document.createElement("option");
            opt.text = list[obj];
            opt.value = list[obj];

            primarylifts.add(opt);
        }
    }
}

//fetch accessory lifts from JSON file
async function fetchaccessorylift() {
    await fetch(url2)
    .then(res => res.json())
    .then(data => loadaccessorylift(data))
    .catch(err => console.log(err))
}
//load accessory lifts from JSON file
function loadaccessorylift(data) {
    for(var key in data){
    var list=data[key]
        for(var obj in list)
        {
            var opt = document.createElement("option");
            opt.text = list[obj];
            opt.value = list[obj];

            secondarylifts.add(opt);
        }
    }
}

function addLift() {
    var pexercise = document.getElementById("primarylifts").value;
    var pset = document.getElementById("pset").value;
    var prep = document.getElementById("prep").value;
    var date = document.getElementById("current-date").value;

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));

    td1.innerHTML=date;
    td2.innerHTML=pexercise;
    td3.innerHTML=pset;
    td4.innerHTML=prep;

    document.getElementById("tbl").appendChild(tr);

}



addLift()
fetchprimarylift()
fetchaccessorylift()
