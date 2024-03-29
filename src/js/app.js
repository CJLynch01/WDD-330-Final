import { getDate,getSunday,getMonday,getTuesday,getWednesday,getThursday,getFriday,getSaturday } from "./date.mjs";
import { fetchprimarylift, fetchaccessorylift } from "./utils.mjs";


function addPLift() {

    let list1 = [];
    let list2 = [];
    let list3 = [];
    let list4 = [];
    
    let n = 1;
    let x = 0;

    let addRow = document.getElementById("tbl");
    let newRow = addRow.insertRow(n);

    list1[x] = getDate();
    list2[x] = document.getElementById("primarylifts").value;
    list3[x] = document.getElementById("plset").value;
    list4[x] = document.getElementById("plrep").value;

    let cel1 = newRow.insertCell(0);
    let cel2 = newRow.insertCell(1);
    let cel3 = newRow.insertCell(2);
    let cel4 = newRow.insertCell(3);
    let cel5 = newRow.insertCell(4);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = ' <input class="removePRow" type="button" onclick="deletePLift(this)" value="Delete"></input>';
    cel5.querySelector('.removePRow').addEventListener('click', function() {
        deletePLift(this);
    });
    n++;
    x++;
}

document.addEventListener("DOMContentLoaded", function() {
    fetchprimarylift(primarylifts);
    fetchaccessorylift(accessorylifts);
    addALift();
    addPLift();
    deleteALift();
    deletePLift();
});



window.addEventListener('popstate', handleRouteChange);

// Initialize the router
handleRouteChange();

function homeView() {
    return ``;
}


function dayWorkout() {
    return `<h1>Today's Workout</h1>
    <div id="current-date">${getDate()}</div>

    <form>
        <fieldset>
        <legend>Primary Lifts</legend>
        <select name="primarylifts" id="primarylifts"></select>
            Sets:<input id="plset" type="text" name="plsets">
            Reps:<input id="plrep" type="text" name="plreps">
            <input class="addlift" id="addlift" type="button" onclick="addPLift" value="Add Data" />
        </fieldset>

        <fieldset>
        <legend>Accessory Lifts</legend>
        <select name="accessorylifts" id="accessorylifts"></select>
            Sets:<input id="alset" type="text" name="alsets">
            Reps:<input id="alrep" type="text" name="alreps">
            <input id="addaccessory" type="button" onclick="addALift()" value="Add Data" />
        </fieldset>    
    </form>

    <table id="tbl" class="table" border="1">
        <thead>
            <th>Date</th> 
            <th>Primary Lift</th>
            <th>Sets</th>
            <th>Reps</th>
        </thead>
        <tbody>
         
        </tbody>
    </table>

    <table id="tbl2" class="table" border="1">
    <thead>
        <th>Date</th> 
        <th>Accessory Lift</th>
        <th>Sets</th>
        <th>Reps</th>
    </thead>
    <tbody>
     
    </tbody>
</table>

    
    <button type="button" id="workoutToday">Submit</button>

    
    `;
}

function weekWorkout() {
    return `<h1>Next Week's Workouts</h1>
    
    <h2>Sunday: ${getSunday()}</h2>
    <h2>Monday: ${getMonday()}</h2>
    <h2>Tuesday: ${getTuesday()}</h2>
    <h2>Wednesday: ${getWednesday()}</h2>
    <h2>Thursday: ${getThursday()}</h2>
    <h2>Friday: ${getFriday()}</h2>
    <h2>Saturday: ${getSaturday()}</h2>

    `;
}

function journal() {
    return `<h1>Journal</h1>
    
    <h2>Create New Entry</h2>

    <div id="jdate">${getDate()}</div>
    Title: <input type="text" id="jinput" />
    Entry: <input type="text" id="jentry" />


    `;
}

// Update handleRouteChange to render views
function handleRouteChange() {
    const path = window.location.pathname;
    let view;

    switch (path) {
        case '/day':
            view = dayWorkout();
            break;

        case '/week':
            view = weekWorkout();
            break;

        case `/journal`:
            view = journal();
            break;

        default:
            view = homeView();
    }

    document.getElementById('app').innerHTML = view;

}

document.querySelectorAll('.route').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        history.pushState(null, '', this.href);
        handleRouteChange();
    });
});



// function addPLift() {

//     let list1 = [];
//     let list2 = [];
//     let list3 = [];
//     let list4 = [];
    
//     let n = 1;
//     let x = 0;

//     let addRow = document.getElementById("tbl");
//     let newRow = addRow.insertRow(n);

//     list1[x] = getDate();
//     list2[x] = document.getElementById("primarylifts").value;
//     list3[x] = document.getElementById("plset").value;
//     list4[x] = document.getElementById("plrep").value;

//     let cel1 = newRow.insertCell(0);
//     let cel2 = newRow.insertCell(1);
//     let cel3 = newRow.insertCell(2);
//     let cel4 = newRow.insertCell(3);
//     let cel5 = newRow.insertCell(4);

//     cel1.innerHTML = list1[x];
//     cel2.innerHTML = list2[x];
//     cel3.innerHTML = list3[x];
//     cel4.innerHTML = list4[x];
//     cel5.innerHTML = ' <input class="removePRow" type="button" onclick="deletePLift(this)" value="Delete"></input>';
//     cel5.querySelector('.removePRow').addEventListener('click', function() {
//         deletePLift(this);
//     });
//     n++;
//     x++;
// }

function deletePLift(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function addALift() {

    let list1 = [];
    let list2 = [];
    let list3 = [];
    let list4 = [];
    
    let n = 1;
    let x = 0;

    let addRow = document.getElementById("tbl2");
    let newRow = addRow.insertRow(n);

    list1[x] = getDate();
    list2[x] = document.getElementById("accessorylifts").value;
    list3[x] = document.getElementById("alset").value;
    list4[x] = document.getElementById("alrep").value;

    let cel1 = newRow.insertCell(0);
    let cel2 = newRow.insertCell(1);
    let cel3 = newRow.insertCell(2);
    let cel4 = newRow.insertCell(3);
    let cel5 = newRow.insertCell(4);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = ' <input class="removeARow" type="button" onclick="deleteALift(this)" value="Delete"></input>';
    cel5.querySelector('.removeARow').addEventListener('click', function() {
        deleteALift(this);
    });

    n++;
    x++;
    
}

function deleteALift(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// document.addEventListener('click', function (e) {
//     if(hasClass(e.target, 'addlift')) {

//     }
// })


document.getElementById('addlift').addEventListener('click', addPLift); // Add primary lift data to the table on click
document.getElementById('addaccessory').addEventListener('click', addALift); // Add accessory lift data to the table on click

// Array.from(document.getElementsByClassName("addlift"))
//     .forEach(function(element){
//         element.addEventListener("click", addPLift);
//     });