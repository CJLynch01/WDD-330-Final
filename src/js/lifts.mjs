import { getDate } from "./utils.mjs";

const url1 = "../json/primary.json";
const url2 = "../json/accessory.json";

export function fetchprimarylift() {
    fetch(url1)
        .then(res => res.json())
        .then(data => loadList(data, 'primarylifts'))
        .catch(err => console.error(err));
}

export function fetchaccessorylift() {
    fetch(url2)
        .then(res => res.json())
        .then(data => loadList(data, 'accessorylifts'))
        .catch(err => console.error(err));
}

function loadList(data, selectId) {
    const select = document.getElementById(selectId);
    select.innerHTML = '';
    for (const key in data) {
        const list = data[key];
        for (const item of list) {
            const option = document.createElement("option");
            option.text = item;
            option.value = item;
            select.appendChild(option);
        }
    }
}

export function addRow(tableId) {
    const table = document.getElementById(tableId);
    if (!table) {
        return;
    }
    const newRow = table.insertRow(-1);
    const cells = [];
    for (let i = 0; i < 6; i++) {
        cells[i] = newRow.insertCell(i);
    }
    return newRow;
}

let primaryliftingData = [];

export function addPLift() {
    const newRow = addRow("tbl");
    if (newRow) {
        const date1 = getDate();
        const primaryliftsValue = document.getElementById("primarylifts").value;
        const plweightValue = document.getElementById("plweight").value;
        const plsetsValue = document.getElementById("plsets").value;
        const plrepsValue = document.getElementById("plreps").value;

        newRow.cells[0].textContent = date1;
        newRow.cells[1].textContent = primaryliftsValue;
        newRow.cells[2].textContent = plweightValue;
        newRow.cells[3].textContent = plsetsValue;
        newRow.cells[4].textContent = plrepsValue;
        newRow.cells[5].innerHTML = '<input type="button" id="deletePRow" value="Delete">';
    
        primaryliftingData.push({
            date1: date1,
            primaryliftsValue: primaryliftsValue,
            plweightValue: plweightValue,
            plsetsValue: plsetsValue,
            plrepsValue: plrepsValue,
        });
    }
}

let accessoryliftingData = [];

export function addALift() {
    const newRow = addRow('tbl2');
    if (newRow) {
        const date2 = getDate();
        const accessoryliftsValue = document.getElementById("accessorylifts").value;
        const alweightValue = document.getElementById("alweight").value;
        const alsetsValue = document.getElementById("alsets").value;
        const alrepsValue = document.getElementById("alreps").value;

        newRow.cells[0].textContent = date2;
        newRow.cells[1].textContent = accessoryliftsValue;
        newRow.cells[2].textContent = alweightValue;
        newRow.cells[3].textContent = alsetsValue;
        newRow.cells[4].textContent = alrepsValue;
        newRow.cells[5].innerHTML = '<input type="button" id="deletePRow" value="Delete">';
    
        accessoryliftingData.push({
            date2: date2,
            accessoryliftsValue: accessoryliftsValue,
            alweightValue: alweightValue,
            alsetsValue: alsetsValue,
            alrepsValue: alrepsValue,
        });
    }
}

export function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

document.addEventListener('click', function(event) {
    if (event.target.id === 'deletePRow') {
        const row = event.target.closest('tr');
        if (row) {
            row.remove();
        }
    }
});

document.addEventListener('click', function(event) {
    if (event.target.id === 'deleteARow') {
        const row = event.target.closest('tr');
        if (row) {
            row.remove();
        }
    }
});

// Function to save lifting data to local storage
export function savePrimaryLiftingDataToLocalStorage() {
    let storedFormData = JSON.parse(localStorage.getItem('primaryliftingData')) || [];
    if(!Array.isArray(storedFormData)){
        storedFormData = [];
    }
    storedFormData = storedFormData.concat(primaryliftingData);
    localStorage.setItem('primaryliftingData', JSON.stringify(storedFormData));
    // Optionally, provide feedback to the user
    alert('Primary Lifting data saved to local storage.');
}

export function saveAccessoryLiftingDataToLocalStorage() { 
    let storedFormData2 = JSON.parse(localStorage.getItem('accessoryliftingData')) || [];
    if(!Array.isArray(storedFormData2)){
        storedFormData2 = [];
    }
    storedFormData2 = storedFormData2.concat(accessoryliftingData);
    localStorage.setItem('accessoryliftingData', JSON.stringify(storedFormData2));
    
// Optionally, provide feedback to the user
    alert('Accessory Lifting data saved to local storage.');
}

const submitliftsButton = document.getElementById('workoutToday');
if (submitliftsButton) {
    console.log(submitliftsButton)
    submitliftsButton.addEventListener('click', savePrimaryLiftingDataToLocalStorage())
    submitliftsButton.addEventListener('click', saveAccessoryLiftingDataToLocalStorage())
}